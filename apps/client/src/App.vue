<script setup lang="ts">
import { ref } from 'vue';
const message = ref('Hello Vue 3!')
const fetchMessage = async () => {
    const res = await fetch('/api/v1')
    message.value = await res.text()
}
</script>

<template>
    <button @click="fetchMessage">
        Click me
    </button>
    <div class="resp">
        {{ message }}
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
