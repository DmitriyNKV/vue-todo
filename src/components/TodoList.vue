<template>
  <div class="row">
    <ul>
      <TodoValue
        v-for="(todo, i) of todos"
        v-bind:itemId="i + 1"
        v-bind:todo="todo"
        v-on:edit="editItem"
        v-on:remove="removeItem"
        v-on:update:todo="onUpdate"
      />
    </ul>
  </div>
</template>

<script>
import TodoValue from "./TodoValue.vue";

export default {
  props: ["todos"],
  components: {
    TodoValue,
  },

  methods: {
    onUpdate(updatedTodo) {
      this.$emit("update-todo", updatedTodo);
    },
    editItem(id) {
      this.$emit("edit", id);
    },
    removeItem(id) {
      this.$emit("remove-value", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
</style>