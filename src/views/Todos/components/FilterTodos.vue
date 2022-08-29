<template>
    <div>
        <h2>Status: {{ picked }}</h2>
        <div>
            <input type="radio" id="one" value="all" v-model="picked" @click="todosStore.filter = 'all'"/>
            <label for="one">All</label>
        </div>
        
        <div>
            <input type="radio" id="two" value="finished" v-model="picked" @click="todosStore.filter = 'finished'"/>
            <label for="two">Finished</label>
        </div>
        
        <div>
            <input type="radio" id="two" value="unfinished" v-model="picked" @click="todosStore.filter = 'unfinished'"/>
            <label for="two">Unfinished</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodos } from '@/stores/todos';
import { ref } from 'vue'

const todosStore = useTodos()
const picked = ref('all')
</script>

<style scoped>

</style>