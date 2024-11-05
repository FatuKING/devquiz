import { create } from 'zustand'

export const useQuiz = create((set, get) => ({
  quizs: [],
  currentQuestion: {},
  indexCurrentQuestion: 0,
  correctAnswer: '',

  gameOver: true,
  currentCategory: '',
  correctQuestion: 0,
  points: 0,
  time: 5 * 60,
  loading: false,
  error: null,
  gameStarted: false,
  startGame: async () => {
    set((state) => ({ gameStarted: !state.gameStarted, loading: true }))

    try {
      const response = await fetch('quiz.json')
      const data = await response.json()

      set((state) => ({ quizs: data, currentQuestion: data[state.indexCurrentQuestion], correctAnswer: data[0].answer }))
      console.log(data)
      console.log(data[0])
      console.log(data[0].answer)
    } catch (error) {
      set({ error: error.message, loading: false })
    } finally {
      set({ loading: false })
    }
  },

  checkAnswer: (e, option) => {
    const { correctAnswer } = get()

    e.preventDefault()

    if (option === correctAnswer) {

    }

    console.log(correctAnswer)
  },

  nextQuiz: () => {
    const { quizs, indexCurrentQuestion } = get()
    const nextIndex = indexCurrentQuestion + 1
    const nextCorrectAnswer = quizs[nextIndex].answer

    if (nextIndex < quizs.length) {
      set({
        indexCurrentQuestion: nextIndex,
        currentQuestion: quizs[nextIndex],
        correctAnswer: nextCorrectAnswer
      })
    }
  },

  setTime: (newTime) => set((state) => ({
    time: typeof newTime === 'function' ? newTime(state.time) : newTime
  })),

  setGameOver: () => {
    set((state) => ({ gameOver: !state.gameOver, loading: true }))
  }
}))
