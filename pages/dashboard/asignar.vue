<template>
  <div class="m-2 sm:m-0 w-full flex flex-col">
    <div class="w-full flex flex-row justify-between items-center h-20">
      <div class="flex flex-row justify-center items-center">
        <div class="flex justify-center items-center mr-2">Asignar</div>
      </div>
      <div class="flex flex-row justify-center items-center">
        <div class="flex items-center h-5 m-2">
          <div class="ml-3 text-sm">
            Buscar
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <TablaAsignar :expedientes="expedientesSinAsignar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    TablaAsignar: () =>
      import('../../components/dashboard/TablaAsignar.vue'),
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
        'expedientesSinAsignar',
      ])
  },
}
</script>
