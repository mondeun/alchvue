import library from '../../api/library'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allMovies: state => state.all
}

const actions = {
  getAllMovies ({ commit }) {
    library.getMovies(movies => {
      commit(types.RECEIVE_MOVIES, { movies })
    })
  }
}

const mutations = {
  [types.RECEIVE_MOVIES] (state, { movies }) {
    state.all = movies
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
