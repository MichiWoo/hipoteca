<template>
  <textarea
    v-model="text"
    class="w-full px-4 py-4 border rounded-lg shadow-md bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-1 border-light-primary focus:text-light-primary dark-focus:text-dark-primary focus:outline-none focus:border-2 focus:border-light-primary dark-focus:border-dark-primary"
    rows="2"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
    }
  },
  watch: {
    text() {
      this.$emit('changeText', this.text)
    },
  },
}
</script>

<style lang="scss" scoped></style>
