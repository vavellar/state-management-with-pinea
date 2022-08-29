<template>
    <form>
        <input type="text" v-model="text" minLength="5">
        <span v-if="minCaractheres">You need to provide at least five caractheres</span>
        <button @click.prevent="handleSendTodo(text)">add todo</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTodos } from '@/stores/todos';

const text = ref('')
const todosStore = useTodos()

const minCaractheres = computed(() => text.value.length >= 1 && text.value.length < 5)

function clearText() {
    text.value = ''
}

function handleSendTodo(text: string) {
    todosStore.addTodo(text)
    clearText()
}


todosStore.$onAction(({ name, store, after}) => {
    after(result => {
        if ( result && name === 'addTodo')  {
            store.showAlert(result)
        }
    })
})

</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column
    }

    span {
        color: red
    }

    input {
        border: 2px solid currentcolor;
    }
    input:invalid {
        border: 2px rgb(49, 195, 17);
    }
    input:invalid:focus {
        background-image: linear-gradient(pink, lightgreen);
    }
</style>