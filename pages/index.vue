<template>
  <div>
    <main class="flex-shrink-0 pt-5">
      <div class="container">
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <h3 class="card-title">To-do list</h3>

              <div class="text-center d-flex justify-content-center" v-if="loading">
                <b-spinner
                  variant="primary"
                  type="grow"
                  style="width: 3rem; height: 3rem;"
                ></b-spinner>
              </div>
              <div v-else>
                <b-input-group class="mt-3 mb-3">
                  <b-form-input
                    id="input-live"
                    v-model="todoText"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="To-do"
                    trim
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button
                      variant="primary"
                      @click="newTodo"
                    >Create
                    </b-button>
                  </b-input-group-append>
                </b-input-group>

                <h4 v-if="!todos.length">List is empty</h4>
                <div v-else>
                  <to-do-list :todos="todos"></to-do-list>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import ToDoList from "~/components/ToDoList";

export default {
  name: 'Index',
  components: {ToDoList},
  data() {
    return {
      loading: true,
      todoText: ''
    }
  },
  async mounted() {
    await this.$store.dispatch('todos/fetch').then(() => {
      this.loading = false
    })
  },
  methods: {
    newTodo() {
      const text = this.todoText
      this.$store.commit('todos/add', {text})
      this.todoText = ''
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/list']
    }
  }
}
</script>

<style>

</style>
