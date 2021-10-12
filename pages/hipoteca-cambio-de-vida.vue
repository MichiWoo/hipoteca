<template>
  <div class="flex items-center content-center justify-center">
    <HipotecaCambioVida />
  </div>
</template>

<script>
export default {
  components: {
    HipotecaCambioVida: () => import('../components/HipotecaCambioVida.vue'),
  },
}
</script>
