<template>
    <div class="todoItem" >
              <label>Edit Text</label>
              <input
                v-model="updatedTodo"
                name="updateTodo"
              >
              <button @click="updateTodoItem(updatedTodo, taskIndex)">Update</button>
              <button @click="doEdit(taskIndex)">Cancel</button>
            </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['update-todo', 'do-edit'],
  props: {
    taskIndex: {
        type: Number,
        required: true,
    }
  },
  setup(props, {emit}) {
    const updatedTodo = ref('')

    function updateTodoItem(text: string, index: number){
      emit('update-todo', text, index)
    }
    
    function doEdit(index: number){
      emit('do-edit', index)
    }

    return {
      updateTodoItem,
      doEdit,
      updatedTodo,
    }
  }
})
</script>
