import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allTvSeries: state => state.all
}

const actions = {
  getAllTvSeries ({ commit }) {
    // todo
  }
}

const mutations = {
  [types.RECEIVE_TVSERIES] (state, { tvSeries }) {
    state.all = tvSeries
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
