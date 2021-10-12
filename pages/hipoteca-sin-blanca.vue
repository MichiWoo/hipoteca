<template>
  <div class="flex items-center content-center justify-center">
    <HipotecaSinBlanca />
  </div>
</template>

<script>
export default {
  components: {
    HipotecaSinBlanca: () => import('../components/HipotecaSinBlanca.vue'),
  },
}
</script>
