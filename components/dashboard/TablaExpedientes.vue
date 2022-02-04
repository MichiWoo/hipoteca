<template>
  <table class="w-full">
    <thead class="text-dark bg-light-accent">
      <tr>
        <th
          scope="col"
          class="
            py-3
            px-1
            text-xs
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
            font-bold
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
          <span
            v-for="titular in expediente.titulares"
            :key="titular.id"
            class="
              bg-gray-100
              text-gray-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
            "
          >
            {{ titular.nombre }}
          </span>
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(expediente.created_at) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.usuario.nombre }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ expediente.telefono1 }}
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
          <span
            v-show="expediente.tramites.length > 0"
            class="
              inline-flex
              items-center
              p-1
              mr-2
              text-sm
              font-semibold
              text-gray-800
              bg-gray-100
              rounded-full
              dark:bg-gray-700
              dark:text-gray-300
            "
          >
            <svg
              class="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setEstado(expediente.estado) }}
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
  },
}
</script>
