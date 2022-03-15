<template>
  <div>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-form-checkbox
        :id="todo.id.toString()"
        v-model="todoState"
        name="checkbox-1"
      >
        {{todo.title}}
      </b-form-checkbox>
      <b-badge pill variant="danger" class="ml-5" @click="deleteTodo(todo)">X</b-badge>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    todo: Object
  },
  methods: {
    deleteTodo(todo) {
      this.$store.commit('todos/remove', {todo})
    }
  },
  computed: {
    todoState: {
      get() {
        return this.todo.completed
      },
      set(value) {
        const todo = this.todo
        this.$store.commit('todos/setTodo',
          {
            todo, value
          })
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
