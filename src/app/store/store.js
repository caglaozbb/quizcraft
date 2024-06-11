import { create } from 'zustand'
const useQuestionStore = create((set) => ({
    inputValue: '',
    setInputValue: (value) => set({ inputValue: value }),
    questions: [],
    setQuestions: (questions) => set({ questions }),
    currentQuestionIdx: 0,
    setCurrentQuestionIdx: (idx) => set({ currentQuestionIdx: idx }),
}))

export default useQuestionStore;
