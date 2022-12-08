<template>
    <div class="inputTodo">
        <h1>To do list</h1>
          <label>Add New Item </label>
          <input 
            v-model="newTodo"
            name="addTodo"
          >
        <button @click="newTodoItem(newTodo)">Add</button>  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['new-todo'],
  setup(props, {emit}) {
    const newTodo = ref('')

    function newTodoItem(text: string){
      emit('new-todo', text)
    }
    return {
      newTodoItem,
      newTodo
    }
  }
})
</script>