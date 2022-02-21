<template>
  <table class="w-full">
    <thead class="text-dark bg-light-accent">
      <tr>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          No.
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          No. Expediente
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha Reg.
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Asignar
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(expediente, index) in expedientes"
        :key="expediente.id"
        class="odd:bg-white even:bg-gray-50 border-b"
      >
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ index + 1 }}
        </td>
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.numero }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(expediente.created_at) }}
        </td>
        <td
          class="py-2 px-4 text-center whitespace-nowrap"
        >
          <button
            type="button"
            class="bg-dark hover:bg-gray-50 hover:text-light focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
            @click="asignar(expediente)"
          >
            <IconUserPlus class="text-light-accent w-4 h-" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    expedientes: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    IconUserPlus: () => import('../../components/icons/UserPlus.vue'),
  },
  methods: {
    setFecha(fecha) {
      return this.$dateFns.format(fecha, 'dd-MM-yyyy')
    },
    setEstado(estado) {
      switch (estado) {
        case 0:
          return 'No Contactado'
        case 1:
          return 'Esperando Doc.'
        case 2:
          return 'Tramitando'
        case 3:
          return 'Firmando'
        case 4:
          return 'Fallida'
        case 5:
          return 'Contactado'
      }
    },
    asignar(expediente) {
      console.log(expediente)
    },
  },
}
</script>
