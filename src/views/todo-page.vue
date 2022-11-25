<template>
  <input-todo @new-todo="addNewTodo"/>
  <mark-unmark-all @mark-all-done="markAllDone" @unmark-all-done="unMarkAllDone"/>
  <div class="todoList">
      <draggable 
        v-model="todoTasks" 
        @start="true" 
        @end="false" 
        item-key="index"
      >
        <template #item="{element, index}">
          <div v-if="element.editing" class="todoItem">
            <update-todo 
              :task-index="index" 
              @update-todo="updateTodo" 
              @do-edit="doEdit"
            />
          </div>
          <div 
            v-else 
            class="todoItem" 
            :class="{ todoItemDone: element.done }"
          >
            <todo-item 
              :itemElement="element" 
              :itemIndex="index" 
              @toggle-done="toggleDone" 
              @remove-todo="removeTodo" 
              @do-edit="doEdit"
            />
          </div> 
        </template>
      </draggable>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useTodo } from '@/composables/use-todo'
import inputTodo from '@/components/input-todo.vue'
import updateTodo from '@/components/update-todo.vue'
import todoItem from '@/components/todo-item.vue'
import markUnmarkAll from '@/components/mark-unmark-all.vue'

export default{
  components: {
    draggable,
    inputTodo,
    updateTodo,
    todoItem,
    markUnmarkAll
  },
  setup() {
    const {
      todoTasks,
      doEdit,
      addNewTodo,
      removeTodo,
      updateTodo,
      toggleDone,
      markAllDone,
      unMarkAllDone
    } = useTodo()

    const newTodo = ref('')
    const updatedTodo = ref('')

    return {
      todoTasks,
      newTodo,
      updatedTodo,
      doEdit,
      addNewTodo,
      removeTodo,
      updateTodo,
      toggleDone,
      markAllDone,
      unMarkAllDone
    }
  }
}
</script>