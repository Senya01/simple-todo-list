<template>
  <div>
    <b-list-group v-for="todo in todos">
      <to-do-item :todo="todo"></to-do-item>
    </b-list-group>
  </div>
</template>

<script>
import ToDoItem from "~/components/ToDoItem";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  props: {
    todos: Array
  }
}
</script>

<style scoped>

</style>
