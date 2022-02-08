<template>
  <table class="w-full">
    <thead class="text-dark bg-light-accent">
      <tr>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Usuario
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Departamento
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
          Categoría
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha Alta
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Fecha Baja
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="usuario in usuarios"
        :key="usuario.id"
        class="odd:bg-white even:bg-gray-50 border-b"
      >
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ usuario.nombre }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ usuario.departamento }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ usuario.email }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ usuario.categoria }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(usuario.created_at) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(usuario.fecha_baja) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    usuarios: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setFecha(fecha) {
      if (!fecha) {
        return ''
      }
      return this.$dateFns.format(fecha, 'dd-MM-yyyy')
    },
  },
}
</script>
