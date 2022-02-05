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
          Ip
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Conexión
        </th>
        <th
          scope="col"
          class="py-3 px-1 text-xs font-bold tracking-wider text-center text-gray-700 uppercase"
        >
          Página
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
          Formulario
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(conexion, index) in conexiones"
        :key="conexion.id"
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
          {{ conexion.ip }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ setFecha(conexion.created_at) }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ conexion.pagina }}
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        ><div class="flex justify-center content-center items-center">
          <IconMobile v-if="conexion.movil == 1" class="w-3 h-3" />
          <IconPc v-else class="w-3 h-3" />
        </div>
        </td>
        <td
          class="py-2 px-4 text-sm text-gray-500 text-center whitespace-nowrap"
        >
          {{ conexion.formulario == 0 ? 'No' : 'Si'}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  components: {
    IconMobile: () => import('../icons/Mobile.vue'),
    IconPc: () => import('../icons/Pc.vue'),
  },
  props: {
    conexiones: {
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
