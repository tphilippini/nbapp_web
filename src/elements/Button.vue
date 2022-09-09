<template>
  <button
    type="button"
    :class="[primary ? 'is-primary' : '']">
      {{ txt }}
  </button>
</template>

<script>
export default {
  props: {
    txt: String,
    primary: Boolean,
  },
}
</script>

<style lang="scss">
  button {
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid $primary;
    border-radius: 3px;
    color: $primary;
    background-color: $white;
  }

  button.is-primary {
    color: $white;
    background-color: $primary;
  }
</style>
