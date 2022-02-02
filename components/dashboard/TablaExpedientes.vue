<template>
  <table class="w-full">
    <thead class="text-dark">
      <tr>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          No.
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Titulares
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Fecha Reg.
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Usuario
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Teléfono
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Localidad
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Provincia
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Operación
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Banco
        </th>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-medium
            tracking-wider
            text-center text-gray-700
            uppercase
          "
        >
          Estado
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="expediente in expedientes"
        :key="expediente.id"
        class="odd:bg-white even:bg-gray-50 border-b"
      >
        <td
          class="py-2 px-1 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.numero }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.titulares.length }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.created_at }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.usuario.nombre }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.usuario.telefono1 }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.localidad }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.provincia }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.tipo }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.tramites.length }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.estado }}
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
}
</script>
