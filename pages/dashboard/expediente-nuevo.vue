<template>
  <div class="flex flex-col items-center">
    <div class="w-9/12 flex flex-row justify-between items-start my-8">
      <div class="flex justify-center items-center">
        <span class="text-light-primary font-semibold text-xl">Nuevo Expediente</span>
      </div>
      <div class="flex justify-center items-center">
        <router-link to="/dashboard">
          <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-light transition-colors duration-150 bg-light-primary rounded-full focus:shadow-outline hover:bg-indigo-800">
            <IconClose class="w-4 h-4" />
          </button>
        </router-link>
      </div>
    </div>
    <div class="w-9/12 flex flex-row justify-center items-start">
      <FormularioExpediente />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      FormularioExpediente: () => import('../../components/formularios/FormularioExpediente.vue'),
      IconClose: () => import('../../components/icons/Times.vue')
    },
  }
</script>
