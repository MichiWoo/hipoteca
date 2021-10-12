<template>
  <div class="flex items-center content-center justify-center">
    <HipotecaFuncionario />
  </div>
</template>

<script>
export default {
  components: {
    HipotecaFuncionario: () => import('../components/HipotecaFuncionario.vue'),
  },
}
</script>
