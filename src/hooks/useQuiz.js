import { create } from 'zustand'

export const useQuiz = create((set, get) => ({
  quizs: [],
  currentQuestion: {},
  indexCurrentQuestion: 0,
  correctAnswer: '',

  gameOver: false, // Si el juego finalizo
  currentCategory: 'Frontend', // Nombre de la categoria actual
  correctQuestion: 0, // Preguntas respondidas bien
  selectedOption: '',
  isCorrect: false,
  time: 5 * 60, // Tiempo inicial
  loading: false, 
  error: null,
  gameStarted: false,
  startGame: async () => {
    set((state) => ({ gameStarted: !state.gameStarted, loading: true }))

    try {
      const response = await fetch('quiz.json')
      const data = await response.json()

      set((state) => ({ 
        quizs: data, 
        currentQuestion: data[state.indexCurrentQuestion], 
        correctAnswer: data[0].answer,
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
      
      if(indexCurrentQuestion === quizs.length - 1){
        setGameOver()
      } else {
        setTimeout(() => {
          nextQuiz()
        }, 1000)
      }
    } else {
      set({ selectedOption: option, isCorrect: false})
      if(indexCurrentQuestion >= quizs.length - 1){
        setGameOver()
      } else {
        setTimeout(() => {
          nextQuiz()
        }, 1000)
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

  setTime: (newTime) => set((state) => ({
    time: newTime(state.time)
  })),

  setGameOver: () => {
    set((state) => ({ gameOver: !state.gameOver, gameStarted: false, loading: true }))
  }
}))
