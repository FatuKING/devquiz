import { create } from 'zustand'
import { fireworkEffect } from '../logic/fireworkEffect'

export const useQuiz = create((set, get) => ({
  quizs: [],
  currentQuestion: {},
  indexCurrentQuestion: 0,
  correctAnswer: '',

  gameOver: false, // Si el juego finalizo
  currentCategory: '', // Nombre de la categoria actual
  correctQuestion: 0, // Preguntas respondidas bien
  selectedOption: '',
  isCorrect: false,
  time: 0, // Tiempo inicial
  loading: false,
  error: null,
  gameStarted: false,
  startGame: async (category) => {
    set((state) => ({ gameStarted: !state.gameStarted, loading: true }))

    try {
      const response = await fetch('quiz.json')
      const data = await response.json()

      set((state) => ({
        quizs: data,
        currentQuestion: data[state.indexCurrentQuestion],
        correctAnswer: data[0].answer,
        currentCategory: category,
        time: 5 * 60
      }))

      console.log(data)
      console.log(data[0])
      console.log(data[0].answer)
    } catch (error) {
      set({ error: error.message, loading: false })
    } finally {
      set({ loading: false })
    }
  },

  checkAnswer: (option) => {
    const { correctAnswer, nextQuiz, indexCurrentQuestion, quizs, setGameOver } = get()

    if (option === correctAnswer) {
      set((state) => ({
        selectedOption: option,
        correctQuestion: state.correctQuestion + 1,
        isCorrect: true
      }))

      if (indexCurrentQuestion === quizs.length - 1) {
        setGameOver()
        fireworkEffect()
      } else {
        setTimeout(() => {
          nextQuiz()
        }, 1000)
      }
    } else {
      set({ selectedOption: option, isCorrect: false })
      if (indexCurrentQuestion >= quizs.length - 1) {
        setGameOver()
        fireworkEffect()
      } else {
        setTimeout(() => {
          nextQuiz()
        }, 2000)
      }
    }
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

  resetGame: () => {
    set({
      quizs: [],
      currentQuestion: {},
      indexCurrentQuestion: 0,
      correctAnswer: '',
      gameOver: false,
      currentCategory: 'Frontend',
      correctQuestion: 0,
      selectedOption: '',
      isCorrect: false,
      time: 0,
      loading: false,
      error: null,
      gameStarted: false
    })
  },

  setTime: (newTime) => set((state) => ({
    time: newTime(state.time)
  })),

  setGameOver: () => {
    set((state) => ({ gameOver: !state.gameOver, gameStarted: false, loading: true }))
  }
}))
