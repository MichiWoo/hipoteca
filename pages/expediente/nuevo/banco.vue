<template>
  <div class="w-full flex flex-col justify-center items-center my-6">
    <div class="flex justify-center items-center">
      <p class="text-dark font-bold">Bancos</p>
      <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-light transition-colors duration-150 bg-light-primary rounded-full focus:shadow-outline hover:bg-indigo-800 mx-2"
        @click="showForm = true"
      >
        <IconPlus class="w-4 h-4" />
      </button>
    </div>
    <div v-show="showForm" class="flex justify-center items-center my-4">
      <FormularioTramites @closeForm="closeForm" />
    </div>
    <div v-show="!showForm" class="flex justify-center items-center my-4">
      <TablaTramites :tramites="expediente.tramites ? expediente.tramites : []" />
    </div>
    <div v-show="!showForm" class="flex justify-center items-center my-6">
      Lista de Comentarios
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      IconPlus: () => import('../../../components/icons/Plus.vue'),
      FormularioTramites: () => import('../../../components/formularios/FormularioTramites.vue'),
      TablaTramites: () => import('../../../components/tablas/TablaTramites.vue'),
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      }
    },
    data() {
      return {
        showForm: false,
      }
    },
    methods: {
      closeForm(val) {
        console.log(`Val: ${val}`)
        this.showForm = false
      },
    },
    
  }
</script>