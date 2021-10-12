<template>
  <div class="flex items-center content-center justify-center">
    <HipotecaAutopromotor />
  </div>
</template>

<script>
export default {
  components: {
    HipotecaAutopromotor: () =>
      import('../components/HipotecaAutopromotor.vue'),
  },
}
</script>
