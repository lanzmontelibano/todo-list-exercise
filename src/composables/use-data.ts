import { ref } from 'vue'
import ITodoTasks from '@/types/todoTasks'

export function useData(){
    const todoTasks = ref<ITodoTasks[]>([])

    return { todoTasks }
}