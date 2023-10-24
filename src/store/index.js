import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      state.todo.push(payload)
    }
  },
  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
          .then((response) => {
            commit('storeTodos', response.data)
            resolve()
          })
        }, 100);
      })
    },
    addTodo({commit }, data) {
      axios.post('http://localhost:3000/todos', data).then((r) => {
        commit('storeTodo', r.data)
      })
    }
  }, 
  modules: {
  }
})
