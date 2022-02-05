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
          Nombre
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Email
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Teléfono
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Localidad
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          IP
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Dispositivo
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Usuario
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(formulario, index) in formularios"
        :key="formulario.id"
        class="odd:bg-white even:bg-gray-50 border-b"
      >
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ index + 1 }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.nombre }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.email }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.telefono }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.localidad }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.ip }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(formulario.fecha) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.movil == 1 ? 'Movil' : 'Pc' }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ formulario.usuario ? formulario.usuario.nombre : '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    formularios: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setFecha(fecha) {
      return this.$dateFns.format(fecha, 'dd-MM-yyyy')
    },
  },
}
</script>
