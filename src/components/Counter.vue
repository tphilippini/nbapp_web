<template>
  <p class="count">{{ count }}</p>
  <Button @click="count--" txt="Decrement" primary />
  <Button @click="count++" txt="Increment" />
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/elements/Button.vue'

const count = ref(0)
</script>

<style lang="scss">
  .count {
    font-size: 32px;
    font-weight: 700;
    margin: 1em 0;
  }
</style>
