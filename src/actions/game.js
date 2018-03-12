import request from 'superagent'
// import { CREATE_GAME } from './types'
import { MOVE } from './types'
import { fillBoard } from '../lib/game'

const baseUrl = 'http://localhost:4001/games'


export const CREATE_GAME = 'CREATE_GAME'

export const createGame = (rows = 6) => {
  return (dispatch) => {
    request
      .post(`${baseUrl}`)
      .send({game: "newgame"})
      .then((response) => {
        const game = response.body.game
        const board = response.body.board
        const locked = response.body.locked
        const sidebar = response.body.sidebar
        dispatch({
          type: 'CREATE_GAME',
          payload: game, board, locked, sidebar
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
