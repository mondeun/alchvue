import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import movies from './modules/movies'
import tvSeries from './modules/tvSeries'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    movies,
    tvSeries
  },
  strict: process.env.NODE_ENV !== 'production'
})
