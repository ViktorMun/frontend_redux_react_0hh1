import request from 'superagent'
//import { CREATE_GAME } from './types'
import { MOVE } from './types'
import { fillBoard } from '../lib/game'

const baseUrl = 'http://localhost:3030/games'



// export const createGame = (rows = 6) => {
//   const [board, locked] = fillBoard(rows)
//   return {
//     type: CREATE_GAME,
//     payload: {
//       board,
//       locked
//     }
//   }
// }

export const CREATE_GAME = 'CREATE_GAME'

export const createGame = (rows = 6) => {
  return (dispatch) => {
    request
      .post(`${baseUrl}`)
      .then((response) => {
        const [board, locked] = response.body
        dispatch({
          type: 'CREATE_GAME',
          payload: {
                board,
                locked
              }
        })
      })
      .catch((error) => {
        console.error('Something went wrong!', error)
      })
  }
}

export const move = (row, col) => ({
  type: MOVE,
  payload: {
    row,
    col
  }
})
