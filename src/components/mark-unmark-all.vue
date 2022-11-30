<template>
    <button @click="markAllDone()">Mark all done</button>
    <button @click="unmarkAllDone()">Unmark all done</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
emit: ['mark-all-done', 'unmark-all-done'],

    setup(props, {emit}){
        function markAllDone(){
        emit('mark-all-done')
        }

        function unmarkAllDone(){
        emit('unmark-all-done')
        }
    return {
        markAllDone,
        unmarkAllDone,
        }
    }    
})
</script>