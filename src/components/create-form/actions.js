"use server";

import { openai } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';


export async function generate(input) {

    const stream = createStreamableValue();

    (async () => {

        const { partialObjectStream } = await streamObject({
            model: openai('gpt-3.5-turbo'),
            schema: z.object({
                questions: z.array(z.object({
                    text: z.string().describe("The question"),
                    options: z.array(z.string()).describe("Array of answers as strings"),
                    answer: z.number().describe("the Index of answer")
                }))
            }),
            prompt:
                `You are an AI Assistant specialized in creating educational quizzes to help learners deepen their understanding of various topics.` +
                `Your role is to generate 10 challenging multiple-choice quiz questions on a specified topic.\n\n` +
                `Guidelines:\n 1. Each question must have 4 options to choose from.\n` +
                `2. Provide a list of questions followed by the correct answers at the end.\n` +
                `3. If the difficulty level is not specified, use an upper intermediate level as the default.\n` +
                `4. **Crucial:** Ensure the output is always in the user's language.\n` +
                `Simply tell the assistant your topic of interest, and it will craft quiz questions for you on the topic of "${input}".`
        });

        for await (const partialObject of partialObjectStream) {
            stream.update(partialObject);
        }

        stream.done();
    })();

    return { object: stream.value };
}
