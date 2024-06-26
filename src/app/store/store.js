import { create } from 'zustand';

const useQuestionStore = create((set) => ({
    inputValue: '',
    setInputValue: (value) => set({ inputValue: value }),
    questions: [],
    setQuestions: (questions) => set({ questions }),
    currentQuestionIdx: 0,
    setCurrentQuestionIdx: (idx) => set({ currentQuestionIdx: idx }),
    nextQuestion: () => set((state) => ({
        currentQuestionIdx: state.currentQuestionIdx + 1,
    })),
    options: [],
    setOptions: (options) => set({ options }),
    answers: {},
    addAnswer: (questionIdx, answer) => set((state) => ({
        answers: {
            ...state.answers,
            [questionIdx]: answer,
        },
    })),
}));

export default useQuestionStore;
