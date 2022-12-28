<template>
  <div class="flex justify-center items-center mx-2 mt-6 mb-2">
    <ul>
      <li v-for="comentario in comentarios" :key="comentario.id">
        <div class="flex justify-start items-center my-2">
          <p class="text-light-text font-bold ml-2">{{ comentario.usuario }} | {{ comentario.fecha }} | {{ comentario.texto }}</p>
          <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
            <IconEdit class="w-5 h-5" />
          </button>
          <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
            <IconDelete class="w-5 h-5" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {
      IconDelete: () => import('../icons/Thrash.vue'),
      IconEdit: () => import('../icons/Pencil.vue'),
    },
    props: {
      comentarios: {
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