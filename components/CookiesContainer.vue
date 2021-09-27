<template>
  <div class="fixed bottom-0 left-0">
    <ButtonCookies class="w-full" @verCookies="verCookies"></ButtonCookies>
  </div>
</template>

<script>
export default {
  name: 'CookiesContainer',
  methods: {
    verCookies(val) {
      this.$emit('verCookies', val)
    },
  },
}
</script>

<style scoped></style>
