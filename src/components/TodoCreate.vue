<template>
  <div class="todo-create">
    <input class="todo-create-input" type="text" placeholder="Add a task..." />

    <button class="todo-create-button">+</button>
  </div>
</template>

<style scoped>
.todo-create {
  position: relative;
}

.todo-create-input {
  width: 100%;
  height: 40px;

  padding: 2px 42px 2px 8px;

  color: #d4d4d4;
  background-color: #181b2f;

  border: none;
  border-radius: 4px;

  outline: none;
  outline-offset: 4px;

  font-size: 16px;
}

.todo-create-input:focus {
  outline: 2px solid #181b2f;
}

.todo-create-button {
  position: absolute;

  top: 4px;
  right: 4px;

  width: 32px;
  height: 32px;

  font-size: 20px;

  color: #d4d4d4;
  background-color: #222642;

  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.todo-create-button:active {
  background-color: #292e51;
}
</style>
