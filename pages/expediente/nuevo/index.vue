<template>
  <div class="w-11/12 flex flex-row justify-center items-start">
    <FormularioExpediente @submitform="goTitulares" />
  </div>
</template>

<script>
  export default {
    components: {
      FormularioExpediente: () => import('../../../components/formularios/FormularioExpediente.vue'),
    },
    methods: {
      goTitulares(resp) {
        console.log(resp)
        this.$router.push('/expediente/nuevo/titulares')
      }
    },
  }
</script>