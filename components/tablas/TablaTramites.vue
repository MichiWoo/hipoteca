<template>
  <table class="w-full">
    <thead class="text-dark bg-light-accent">
      <tr>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Banco
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha Presentación
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha Resolución
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Sanción
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tramite in expediente.tramites" :key="tramite.id" class="odd:bg-white even:bg-gray-50 border-b">
        <td class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap">
          {{ tramite.banco.nombre }}
        </td>
        <td class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap">
          {{ tramite.fecha_presentacion }}
        </td>
        <td class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap">
          {{ tramite.fecha_resolucion }}
        </td>
        <td class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap">
          {{ setEstado(tramite.estado) }}
        </td>
        <td class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap">
          <div class="flex justify-center items-center">
            <button type="button" class="text-dark border border-dark hover:bg-dark hover:text-light focus:ring-4 focus:outline-none focus:ring-dark font-medium rounded-full text-sm p-2 text-center inline-flex items-center">
              <IconEdit class="w-4 h-4 mx-2" />
            </button>
            <button type="button" class="text-dark border border-dark hover:bg-dark hover:text-light focus:ring-4 focus:outline-none focus:ring-dark font-medium rounded-full text-sm p-2 text-center inline-flex items-center">
              <IconDelete class="w-4 h-4 mx-2" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    components: {
      IconDelete: () => import('../icons/Thrash.vue'),
      IconEdit: () => import('../icons/Pencil.vue'),
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      }
    },
    methods: {
      setEstado(estado) {
        switch (estado) {
          case 0:
            return 'Pendiente'
          case 1:
            return 'Aprobada'
          case 2:
            return 'Denegado'
        }
      },
    },
  }
</script>