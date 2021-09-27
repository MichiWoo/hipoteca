<template>
  <button
    class="w-full p-3 rounded-lg bg-light-primary dark:bg-dark-primary border-light-accent dark:border-text-dark-accent text-light dark:text-dark-text hover:bg-light-accent hover:ring-2 hover:ring-light-accent hover:ring-opacity-50"
    aria-label="Boton Enviar"
    @click="clicked"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonSubmit',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked', true)
    },
  },
}
</script>

<style scoped></style>
