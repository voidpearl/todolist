<script setup>
import { ref } from "vue";
import TodoCreate from "./components/TodoCreate.vue";
import TodoDate from "./components/TodoDate.vue";
import TodoList from "./components/TodoList.vue";

const currentTodos = ref([
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
const completedTodos = ref([
  {
    id: 3,
    text: "drink some tea",
    isCompleted: true,
  },
  {
    id: 4,
    text: "finish todolist app",
    isCompleted: true,
  },
]);

const complete = (toggledTodo) => {
  currentTodos.value = currentTodos.value.filter(
    (currentTodo) => currentTodo.id !== toggledTodo.id
  );
  toggledTodo.isCompleted = true;
  completedTodos.value.push(toggledTodo);
};

const uncomplete = (toggledTodo) => {
  completedTodos.value = completedTodos.value.filter(
    (completedTodo) => completedTodo.id !== toggledTodo.id
  );
  toggledTodo.isCompleted = false;
  currentTodos.value.push(toggledTodo);
};

const createTodo = (todoText) => {
  const maxId = [...currentTodos.value, ...completedTodos.value].reduce(
    (acc, curr) => (acc > curr.id ? acc : curr.id),
    0
  );

  currentTodos.value.push({
    id: maxId + 1,
    text: todoText,
    isCompleted: false,
  });
};
</script>

<template>
  <div class="container todo-app">
    <TodoDate />

    <TodoCreate @create-todo="createTodo" />

    <TodoList
      v-if="currentTodos.length"
      @toggle-complete="(todo) => complete(todo)"
      :title="'TO DO'"
      :todos="currentTodos"
    />
    <TodoList
      v-if="completedTodos.length"
      @toggle-complete="(todo) => uncomplete(todo)"
      :title="'COMPLETED'"
      :todos="completedTodos"
    />
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
