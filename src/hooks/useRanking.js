import { useReducer, useEffect } from 'react'

const initialState = {
  ranking: [],
  currentCategory: 'cienciaDeDatos',
  loading: false
}

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'changeCategory': {
      return { ...state, currentCategory: actionPayload }
    }

    case 'setData': {
      return { ...state, ranking: actionPayload, loading: false }
    }

    case 'setLoading': {
      return { ...state, loading: actionPayload }
    }

    default:
      return state
  }
}

export function useRanking () {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchData () {
      dispatch({ type: 'setLoading', payload: true })
      try {
        const response = await fetch('ranking.json')
        const data = await response.json()
        const indexCategory = data.ranking.findIndex((category) => category.categoria === state.currentCategory)

        if (indexCategory !== -1) {
          const currentRanking = data.ranking[indexCategory].puestos
          dispatch({ type: 'setData', payload: currentRanking })
        } else {
          console.warn('Categoría no encontrada')
          dispatch({ type: 'setData', payload: [] })
        }
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [state.currentCategory])

  return { state, dispatch }
}
