<template>
  <div class="m-2 sm:m-0 w-full flex flex-col">
    <div class="w-full flex flex-row justify-between items-center h-20">
      <div class="flex flex-row justify-center items-center">
        <div class="flex justify-center items-center mr-2">
          Lista de Expedientes
        </div>
        <router-link to="/dashboard/registro">
          <button
            type="button"
            class="text-dark hover:bg-dark hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
          >
            +
          </button>
        </router-link>
      </div>
      <div class="flex-flex-row justify-center items-center">
        <button
          type="button"
          class="text-dark hover:bg-dark hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2 px-4 text-center inline-flex items-center"
        >
          Lupa
          <span class="ml-2">Filtrar</span>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <TableExpedientes :expedientes="expedientes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TableExpedientes: () =>
      import('../../components/dashboard/TablaExpedientes.vue'),
  },
  data() {
    return {
      expedientes: [],
      errors: '',
    }
  },
  mounted() {
    this.getExpedientes()
  },
  methods: {
    async getExpedientes() {
      this.errors = ''
      try {
        const expedients = this.$store.state.expedientes.expedientes
        if (expedients.length == 0) {
          const resp = await this.$store.dispatch('expedientes/getExpedientes')
          this.expedientes = resp
        } else {
          this.expedientes = expedients
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
