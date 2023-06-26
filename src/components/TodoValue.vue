<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        v-model="todo.completed"
        class="form-check-input"
        type="checkbox"
        @change="updateTodo"
      />
      <strong>{{ itemId }}</strong
      >&nbsp;{{ todo.title }}
      <template v-if="isEditing">
        <input
          v-model="editedTitle"
          :class="{ 'is-invalid': !isTitleValid }"
          class="form-control"
          placeholder="Введите новое название"
        />
      </template>
    </span>
    <div>
      <button
        v-if="!isEditing"
        class="btn btn-primary m-2"
        @click.prevent="editTodo"
      >
        <i class="bi bi-pencil-square"></i> Изменить
      </button>
      <button
        v-if="isEditing"
        :disabled="!isTitleValid"
        class="btn btn-success m-2"
        @click.prevent="saveTodo"
      >
        Сохранить
      </button>
      <button class="btn btn-danger" @click="$emit('remove', todo.id)">
        &times;
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["todo", "itemId"],
  data() {
    return {
      isEditing: false,
      editedTitle: this.todo.title,
    };
  },
  computed: {
    isTitleValid() {
      return this.editedTitle.trim().length > 0;
    },
  },
  methods: {
    editTodo() {
      this.isEditing = true;
    },
    saveTodo() {
      if (this.isTitleValid) {
        this.todo.title = this.editedTitle.trim();
        this.isEditing = false;
        this.$emit("update:todo", this.todo);
      }
    },
    updateTodo() {
      this.$emit("update:todo", this.todo);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
  color: green;
}
</style>
