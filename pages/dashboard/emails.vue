<template>
  <div class="m-2 sm:m-0 w-full flex flex-col">
    <div class="w-full flex flex-row justify-between items-center h-20">
      <div class="flex flex-row justify-center items-center">
        <div class="flex justify-center items-center mr-2">Emails</div>
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
            >No Contactados</label>
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
      </div>
    </div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <TablaEmails :expedientes="expedientesShow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    TablaEmails: () =>
      import('../../components/dashboard/TablaEmails.vue'),
  },
  data() {
    return {
      expedientes: [],
      expedientesShow: [],
      errors: '',
      filter: 0,
    }
  },
  computed: {
    ...mapGetters('expedientes', [
        'expedientesNoContactados',
        'expedientesEsperando',
      ])
  },
  watch: {
    filter() {
      switch (this.filter) {
        case 0:
          this.expedientesShow = this.expedientesNoContactados
          return
        case 1:
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
}
</script>
