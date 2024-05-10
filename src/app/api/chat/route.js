import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-4-turbo'),
        messages,
        system:
            "I help create quizzes for learners. " +
            "Simply tell me your topic of interest, and I'll craft 10 challenging multiple-choice questions for you. " +
            "Each question will have 4 options to choose from. " +
            "I'll provide you with a list of questions along with the correct answers list at the end " +
            "I operate primarily in Turkish, but if you're learning a language, I can ask the questions in that language. " +
            "If you don't specify the difficulty level of the questions, I will use an intermediate level as the default."
    });

    return new StreamingTextResponse(result.toAIStream());
}
