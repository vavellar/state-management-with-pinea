import { defineStore } from "pinia";

interface Todo {
    text: string
    id: number
    isFinished: boolean
}

interface ITodos {
    todos: Todo[]
    filter: 'all' | 'finished' | 'unfinished'
    nextId: number
}

export const useTodos = defineStore('todos', {
    state: () => <ITodos>({
        todos: [],
        filter: 'all',
        nextId: 0
    }),
    getters: {
        getTodos(state) {
            return state.todos
        },

        todoListIsEmpty(state) {
            return state.todos.length === 0
        },

        finishedTodos(state) {
            return state.todos.filter((todo) => todo.isFinished)
        },

        unfinishedTodos(state) {
            return state.todos.filter((todo) => !todo.isFinished)
        },

        filteredTodos(): Todo[] {
            if (this.filter === 'finished') {
              return this.finishedTodos
            } else if (this.filter === 'unfinished') {
              return this.unfinishedTodos
            }
            return this.todos
        },
    },
    actions: {
        addTodo(text: string) {
            if (text.length < 5) return alert('Please, provide a todo with more than 5 letters')
            this.todos.push({ text, id: this.nextId++, isFinished: false})

            return text
        },

        changeTodoStatus(id: number) {
            this.todos.map((todo) => todo.id === id ? todo.isFinished = !todo.isFinished : null)
        },

        removeTodo(id: number) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },

        showAlert(text: string) {
            alert(`Todo ${text} add successfully`)
        }
    }
})
