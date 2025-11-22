<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps(["title", "todos"]);
</script>

<template>
  <div class="todo-list">
    <h2 class="todo-list-title">{{ props.title }}</h2>

    <div class="todo-list-items">
      <TodoListItem v-for="todo in props.todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 8px;
}

.todo-list-title {
  color: #d4d4d4;

  font-size: 20px;
}

.todo-list-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
