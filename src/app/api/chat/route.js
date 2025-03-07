import { openai } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';

export async function POST(req) {
    const { messages } = await req.json();
    const stream = createStreamableValue();

    (async () => {

        const { partialObjectStream } = await streamObject({
            model: openai('gpt-3.5-turbo'),
            schema: z.object({
                questions: z.array(z.object({
                    text: z.string().describe("The question"),
                    options: z.array(z.string()).describe("Array of answers as strings"),
                    answer: z.string().describe("Index of answer")
                }))
            }),
            messages,
            system:
                "I help create quizzes for learners. " +
                "Simply tell me your topic of interest, and I'll craft 2 challenging multiple-choice questions for you. " +
                "Each question will have 4 options to choose from. " +
                "I'll provide you with a list of questions along with the correct answers list at the end " +
                "I operate primarily in Turkish, but if you're learning a language, I can ask the questions in that language. " +
                "If you don't specify the difficulty level of the questions, I will use an intermediate level as the default."
        });

        for await (const partialObject of partialObjectStream) {
            stream.update(partialObject);
        }

        stream.done();
    })();

    return { object: stream.value };
}
