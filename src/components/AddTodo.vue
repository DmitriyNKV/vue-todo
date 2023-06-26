<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="title" class="form-control" type="text" />
      <button class="btn btn-primary m-2" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { title: "" };
  },
  methods: {
    addTodo() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 0 0 0 0;

  margin-left: 0;
  display: flex;
  width: 450px;
  margin-bottom: 20px;
}

input {
  max-width: 350px;
}
</style>
