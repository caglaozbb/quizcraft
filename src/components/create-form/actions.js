"use server";

import { openai } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { z } from 'zod';
import { createStreamableValue } from 'ai/rsc';

const DIFFICULTY_OPTIONS = {
    0: "Easy",
    1: "Medium",
    2: "Hard",
    3: "EXTRA HARD"
}


export async function generate({
    topic,
    difficulty
}) {

    if (!topic) {
        throw new Error("Topic is required");
    }

    if (!difficulty) {
        throw new Error("Difficulty is required");
    }

    difficulty = parseInt(difficulty);

    if (!DIFFICULTY_OPTIONS[difficulty]) {
        throw new Error("Invalid difficulty");
    }

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
            system: `I help create quizzes for learners.`,
            prompt:
                `You will prepare 10 challenging multiple-choice quiz questions for you on the topic of "${topic}". ` +
                `Difficulty level of the questions will be ${DIFFICULTY_OPTIONS[difficulty]}. ` +
                `output language: I operate primarily in English` +
                `Each question must have 4 options to choose from. ` +
                `You will provide you with a list of questions along with the correct answers list at the end. ` +
                `If you don't specify the difficulty level of the questions, I will  use an upper intermediate level as the default.`
        });

        for await (const partialObject of partialObjectStream) {
            stream.update(partialObject);
        }

        stream.done();
    })();

    return { object: stream.value };
}
