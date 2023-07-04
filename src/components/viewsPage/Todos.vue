<template>
  <div>
    <router-link to="/">Назад</router-link>
    <hr />
    <div class="">
      <AddTodo v-on:add-todo="addTodo" />
    </div>

    <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      v-on:remove-value="removeItem"
      v-on:update-todo="updateTodo"
    />
    <h2 v-else>Нет задач</h2>

    <button
      v-if="todos.length"
      class="btn btn-danger"
      @click.prevent="removeAllTodos"
    >
      Сброс
    </button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Купить хлеб", completed: false },
        { id: 2, title: "Купить масло", completed: false },
      ],
    };
  },
  components: {
    TodoList,
    AddTodo,
  },
  async mounted() {
    const local = localStorage.getItem("todos");
    this.todos = JSON.parse(local);
  },

  methods: {
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    removeItem(id) {
      this.todos = this.todos.filter((v) => v.id !== id);
      this.saveToLocalStorage();
    },
    addTodo(idTodo) {
      this.todos.push(idTodo);
      this.saveToLocalStorage();
    },
    updateTodo(updatedTodo) {
      const newTodos = [...this.todos];
      const index = newTodos.findIndex((todo) => todo.id === updatedTodo.id);
      this.todos = [...newTodos];

      this.saveToLocalStorage();
    },
    removeAllTodos: function () {
      this.todos = [];
      this.saveToLocalStorage();
    },
  },
};
</script>