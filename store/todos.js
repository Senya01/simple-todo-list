export const state = () => ({
  list: []
})

export const mutations = {
  add(state, {text}) {
    const last_id = state.list.length ? state.list[state.list.length - 1].id : 0
    state.list.push({
      userId: 1,
      id: last_id + 1,
      title: text,
      completed: false
    })
  },
  set(state, data) {
    state.list = data
  },
  remove(state, {todo}) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  setTodo(state, {todo, value}) {
    state.list[state.list.indexOf(todo)].completed = value
  }
}

export const actions = {
  async fetch({commit}) {
    try {
      const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/')
      commit('set', response)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  list: s => s.list
}
