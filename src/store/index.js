import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  msg: String
}

export default new Vuex.Store({
  state,
  strict: process.env.NODE_ENV !== 'production'
})
