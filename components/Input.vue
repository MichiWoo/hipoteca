<template>
  <input
    v-model="text"
    class="
      w-full
      px-4
      py-2
      border
      rounded-lg
      shadow-md
      bg-light
      dark:bg-dark
      text-light-primary
      dark:text-dark-primary
      border-1 border-light-primary
      dark:border-dark-primary
      focus:text-light-primary
      dark-focus:text-dark-primary
      focus:outline-none
      focus:border-2 focus:border-light-primary
      dark-focus:border-dark-primary
    "
    :placeholder="placeholder"
    :type="typeInput"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    typeInput: {
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
