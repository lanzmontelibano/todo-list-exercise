<template >
    <h3 :class="{ done: props.itemElement.done }">{{ props.itemElement.content }}</h3>
              <button @click="toggleDone(itemID)">Mark</button>
              <button @click="removeTodo(itemID)">Remove</button>
              <button v-if="!props.itemElement.done" @click="doEdit(itemID)">Edit</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ITodoTasks from '@/types/todoTasks'

export default defineComponent({
    emits: ['toggle-done', 'remove-todo', 'do-edit'],
    props: {
        itemElement: {
            type: Object as PropType<ITodoTasks>,
            required: true,
            default: null
        },
        itemID: {
            type: Number,
            required: true,
        } 
    },
    setup(props, {emit}){   
        function removeTodo(index: number){
            emit('remove-todo', index)
        }

        function toggleDone(index: number){
            emit('toggle-done', index)
        }

        function doEdit(index: number){
            emit('do-edit', index)
    }

    return {
        toggleDone,
        removeTodo,
        doEdit,
        props
    }
    }
})
</script>