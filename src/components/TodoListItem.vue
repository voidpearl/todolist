<script setup>
const props = defineProps(["todo"]);
const emits = defineEmits(["toggle-complete"]);
</script>

<template>
  <div class="todo-list-item">
    <input
      class="todo-list-item-checkbox"
      type="checkbox"
      name=""
      id=""
      :checked="props.todo.isCompleted"
      @change="$emit('toggle-complete', props.todo)"
    />

    <p
      class="todo-list-item-text"
      :class="{ 'todo-list-item-text-completed': props.todo.isCompleted }"
    >
      {{ props.todo.text }}
    </p>
  </div>
</template>

<style scoped>
.todo-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.todo-list-item-checkbox {
  width: 24px;
  height: 24px;

  border: none;
  border-radius: 0;
}

.todo-list-item-text {
  font-size: 18px;

  color: #a4a4a4;
}

.todo-list-item-text-completed {
  text-decoration: line-through;
}
</style>
