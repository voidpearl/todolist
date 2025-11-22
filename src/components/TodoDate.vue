<script setup>
import { onMounted, ref } from "vue";
import { MONTHS, WEEK_DAYS } from "../utils/date.const";

const day = ref("");
const year = ref("");
const month = ref("");
const weekDay = ref("");

onMounted(() => {
  const date = new Date();

  day.value = date.getDate();
  year.value = date.getFullYear();
  month.value = MONTHS[date.getMonth()];
  weekDay.value = WEEK_DAYS[date.getDay()];
});
</script>

<template>
  <div class="todo-date">
    <h1 class="todo-date--weekday">{{ weekDay }}</h1>
    <p class="todo-date--other">{{ month }} {{ day }}, {{ year }}</p>
  </div>
</template>

<style scoped>
.todo-date {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px 0;
}

.todo-date--weekday {
  font-size: 48px;

  color: #d4d4d4;
}

.todo-date--other {
  font-size: 18px;

  color: #a4a4a4;
}
</style>
