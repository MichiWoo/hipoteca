<template>
  <div class="flex items-center content-center justify-center">
    <Hipoteca80 />
  </div>
</template>

<script>
export default {
  components: {
    Hipoteca80: () => import('../components/Hipoteca80.vue'),
  },
}
</script>
