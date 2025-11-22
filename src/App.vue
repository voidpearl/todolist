<script setup>
import { ref } from "vue";
import TodoCreate from "./components/TodoCreate.vue";
import TodoDate from "./components/TodoDate.vue";
import TodoList from "./components/TodoList.vue";

const todo = ref([
  {
    id: 1,
    text: "drink some tea",
    isCompleted: false,
  },
  {
    id: 2,
    text: "finish todolist app",
    isCompleted: false,
  },
]);
const completed = ref([
  {
    id: 1,
    text: "drink some tea",
    isCompleted: true,
  },
  {
    id: 2,
    text: "finish todolist app",
    isCompleted: true,
  },
]);
</script>

<template>
  <div class="container todo-app">
    <TodoDate />

    <TodoCreate />

    <TodoList v-if="todo.length" :title="'TO DO'" :todos="todo" />
    <TodoList v-if="completed.length" :title="'COMPLETED'" :todos="completed" />
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;

  margin: 0 auto;
  padding: 0 8px;
}

.todo-app {
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 100dvh;
  overflow: hidden;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
  box-sizing: border-box;
}

body {
  background-color: #222642;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
