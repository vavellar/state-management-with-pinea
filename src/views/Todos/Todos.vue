<template>
    <div>
        <h2 v-if="todosStore.todoListIsEmpty">You dont have any todo yet</h2>
        <div v-else>
            <FilterTodos />
            <h2>Your todos</h2>
            <div v-for="todo in todosStore.filteredTodos" class="todo_list">
                <li> Name: {{ todo.text }}</li>
                <li> Finished: {{ todo.isFinished }}</li>
                <div>
                    <span>{{ todo.isFinished ? 'Set as unfinished' : 'Set as finished'}}</span>
                    <input type="checkbox" name="" id="" @click="todosStore.changeTodoStatus(todo.id)">
                </div>
                <button @click="todosStore.removeTodo(todo.id)">Remove todo</button>
            </div>
        </div>
        <AddTodo />
    </div>
</template>

<script setup lang="ts">
import { useTodos } from '@/stores/todos';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';

const todosStore = useTodos()

console.log(todosStore.todos)

</script>

<style scoped>

    .todo_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        text-align: center;
    }

    div {
        margin: 20px 0;
    }

</style>