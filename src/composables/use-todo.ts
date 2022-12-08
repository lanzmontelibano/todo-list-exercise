import { useData } from './use-data'

export function useTodo(){
    const { todoTasks } = useData()

    function doEdit(index: number){
      todoTasks.value[index].editing = !todoTasks.value[index].editing
    }

    function addNewTodo(text: string) {
      todoTasks.value.push({
        done: false,
        editing: false,
        content: text,
      })
    }

    function removeTodo(index: number) {
      todoTasks.value.splice(index, 1)
    }

    function updateTodo( w: string, index: number) {
      todoTasks.value[index].content = w
      todoTasks.value[index].editing = !todoTasks.value[index].editing
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
      addNewTodo,
      removeTodo,
      toggleDone,
      markAllDone,
      unMarkAllDone,
      updateTodo,
      doEdit
    }
}