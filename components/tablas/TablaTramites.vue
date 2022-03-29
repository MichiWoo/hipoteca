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
      <tr
        v-for="tramite in tramites"
        :key="tramite.id"
        class="odd:bg-white even:bg-gray-50 border-b"
      >
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ tramite.banco.nombre }}
        </td>
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(tramite.fecha_presentacion) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(tramite.fecha_resolucion) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setEstado(tramite.estado) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      tramites: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      setFecha(fecha) {
        return this.$dateFns.format(fecha, 'dd-MM-yyyy')
      },
      setEstado(estado) {
        switch (estado) {
          case 0:
            return 'Pendiente'
          case 1:
            return 'Aprobado'
          case 2:
            return 'Denegado'
        }
      },
    },
  }
</script>