<template>
  <div class="flex items-center content-center justify-center">
    <Home />
  </div>
</template>

<script>
export default {
  components: {
    Home: () => import('../components/Home'),
  },
}
</script>

<style></style>
