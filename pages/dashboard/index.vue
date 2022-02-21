<template>
  <div class="m-2 sm:m-0 w-full flex flex-col">
    <div class="w-full flex flex-row justify-between items-center h-20">
      <div class="flex flex-row justify-center items-center">
        <div class="flex justify-center items-center mr-2">Lista de Expedientes</div>
        <router-link to="/dashboard/expediente-nuevo">
          <button
            type="button"
            class="text-light bg-light-primary hover:bg-dark hover:text-light focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
          >
            <IconPlus class="w-4 h-4" />
          </button>
        </router-link>
      </div>
      <div class="flex flex-row justify-center items-center">
        <div class="flex items-center h-5 m-2">
          <input
            id="nocontactado"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="0"
          />
          <div class="ml-3 text-sm">
            <label
              for="nocontactado"
              class="font-medium text-gray-900 dark:text-gray-300"
            >No Contactado</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="contactado"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="1"
          />
          <div class="ml-3 text-sm">
            <label for="contactado" class="font-medium text-gray-900 dark:text-gray-300">Contactado</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="esperando"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="2"
          />
          <div class="ml-3 text-sm">
            <label
              for="esperando"
              class="font-medium text-gray-900 dark:text-gray-300"
            >Esperando Doc.</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="tramitando"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="3"
          />
          <div class="ml-3 text-sm">
            <label for="tramitando" class="font-medium text-gray-900 dark:text-gray-300">Tramitando</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="firmando"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="4"
          />
          <div class="ml-3 text-sm">
            <label for="firmando" class="font-medium text-gray-900 dark:text-gray-300">Firmando</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="fallida"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="5"
          />
          <div class="ml-3 text-sm">
            <label for="fallida" class="font-medium text-gray-900 dark:text-gray-300">Fallida</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="banco"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="6"
          />
          <div class="ml-3 text-sm">
            <label for="banco" class="font-medium text-gray-900 dark:text-gray-300">Banco</label>
          </div>
        </div>
        <div class="flex items-center h-5 m-2">
          <input
            id="todos"
            v-model.number="filter"
            type="radio"
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            value="7"
          />
          <div class="ml-3 text-sm">
            <label for="todos" class="font-medium text-gray-900 dark:text-gray-300">Todos</label>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <TableExpedientes :expedientes="expedientesShow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    TableExpedientes: () =>
      import('../../components/dashboard/TablaExpedientes.vue'),
    IconPlus: () => import('../../components/icons/Plus.vue')
  },
  data() {
    return {
      expedientes: [],
      expedientesShow: [],
      errors: '',
      filter: 7
    }
  },
  computed: {
    ...mapGetters('expedientes', [
        'expedientesNoContactados',
        'expedientesContactados',
        'expedientesEsperando',
        'expedientesTramitando',
        'expedientesFirmando',
        'expedientesFallida',
        'expedientesBanco'
      ])
  },
  watch: {
    filter() {
      switch (this.filter) {
        case 0:
          this.expedientesShow = this.expedientesNoContactados
          return
        case 1:
          console.log()
          this.expedientesShow = this.expedientesContactados
          return
        case 2:
          this.expedientesShow = this.expedientesEsperando
          return
        case 3:
          this.expedientesShow = this.expedientesTramitando
          return
        case 4:
          this.expedientesShow = this.expedientesFirmando
          return
        case 5:
          this.expedientesShow = this.expedientesFallida
          return
        case 6:
          this.expedientesShow = this.expedientesBanco
          return
        case 7:
          this.expedientesShow = this.expedientes
      }
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
        if (expedients.length === 0) {
          const resp = await this.$store.dispatch('expedientes/getExpedientes')
          this.expedientes = resp
        } else {
          this.expedientes = expedients
        }
        this.expedientesShow = this.expedientes
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
