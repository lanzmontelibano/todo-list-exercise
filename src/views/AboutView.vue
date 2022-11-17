<template>
  <div class="inputTodo">
    <h1>To do list</h1>
    <form @submit.prevent="addNewTodo">
        <label>Add Item </label>
        <input
          v-model="newTodo"
          name="addTodo">
        <button>Add</button>    
    </form>
  </div>
  <button @click="markAllDone()">Mark all done</button>
  <button @click="unMarkAllDone()">Unmark all done</button>
  <div class="todoList">
    <div v-for="(todo, index) in todoTasks" :key="index">
      <div v-if="todo.editing" class="todoItem" draggable="true">
        <label>Edit Text</label>
        <input
          v-model="updatedTodo"
          name="updateTodo">
        <button @click="updateTodo(index, updatedTodo)">Update</button>
        <button @click="doEdit(index)">Cancel</button>    
      </div>
      <div v-else class="todoItem" draggable="true" :class="{ todoItemDone: todo.done }">
        <h3 :class="{ done: todo.done }">{{ todo.content }}</h3>
        <button @click="toggleDone(index)">Mark</button>
        <button @click="removeTodo(index)">Remove</button>
        <button v-if="!todo.done" @click="doEdit(index)">Edit</button>
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ITodoTasks from '@/types/todoTasks'

export default{
  setup() {
    const newTodo = ref('')
    const updatedTodo = ref('')
    const todoTasks = ref<ITodoTasks[]>([])

    function doEdit(index: number){
      todoTasks.value[index].editing = !todoTasks.value[index].editing
    }

    function addNewTodo() {
      todoTasks.value.push({
        done: false,
        editing: false,
        content: newTodo.value
      })
      newTodo.value = ''
    }

    function removeTodo(index: number) {
      todoTasks.value.splice(index, 1)
    }

    function updateTodo(index: number, w: string) {
      todoTasks.value[index].content = w
      todoTasks.value[index].editing = false
      updatedTodo.value = ''
    }

    function toggleDone(index: number){
      todoTasks.value[index].done = !todoTasks.value[index].done
    }

    function markAllDone() {
      todoTasks.value.forEach((index) => index.done = true)
    }

    function unMarkAllDone() {
      todoTasks.value.forEach((index) => index.done = false)
    }
    
    return {
      todoTasks,
      newTodo,
      updatedTodo,
      addNewTodo,
      removeTodo,
      toggleDone,
      markAllDone,
      unMarkAllDone,
      updateTodo,
      doEdit
    }
  }
}
</script>