<template>
<div class="w-full flex flex-col justify-center items-start">
  <div class="w-full flex justify-between items-center">
    <div class="mb-6">
      <label for="banco" class="block mb-2 text-sm font-medium text-light-text">Selecciona el Banco</label>
      <select id="banco" v-model.number="prestamo.banco_id" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2"
        :disabled="estado == 2"
      >
        <option v-for="b in bancos" :key="b.id" :value="b.id">{{ b.nombre }}</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="tipo" class="block mb-2 text-sm font-medium text-light-text">Tipo</label>
      <input id="tipo" v-model="prestamo.tipo" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Nombre Completo"
        :disabled="estado == 2"
      >
    </div>
  </div>
  <div class="w-full flex justify-between items-center">
    <div class="mb-6">
      <label for="inicial" class="block mb-2 text-sm font-medium text-light-text">Inicial</label>
      <div class="relative mt-1">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IconEuro class="text-light-text w-5 h-5" />
        </div>
        <input id="inicial" v-model.number="prestamo.inicial" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00"
          :disabled="estado == 2"
        >
      </div>
    </div>
    <div class="mb-6">
      <label for="pendiente" class="block mb-2 text-sm font-medium text-light-text">Pendiente</label>
      <div class="relative mt-1">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IconEuro class="text-light-text w-5 h-5" />
        </div>
        <input id="pendiente" v-model.number="prestamo.pendiente" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00"
          :disabled="estado == 2"
        >
      </div>
    </div>
    <div class="mb-6">
      <label for="cuota" class="block mb-2 text-sm font-medium text-light-text">Cuota</label>
      <div class="relative mt-1">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IconEuro class="text-light-text w-5 h-5" />
        </div>
        <input id="cuota" v-model.number="prestamo.cuota" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00"
          :disabled="estado == 2"
        >
      </div>
    </div>
  </div>
  <div class="w-full flex justify-end items-center">
    <button 
      v-show="estado == 1"
      type="button"
      class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
      @click="submitForm"
    >
        Guardar
    </button>
    <button 
      v-show="estado == 2"
      type="button"
      class="text-dark bg-light-accent hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
      @click="estado = 3"
    >
        Editar
    </button>
    <button 
      v-show="estado == 3"
      type="button"
      class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
      @click="submitForm"
    >
        Actualizar
    </button>
    <button 
      v-show="estado == 3"
      type="button"
      class="text-dark bg-light hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
      @click="cancelEdit"
    >
        Cancelar
    </button>
  </div>
</div>
</template>

<script>
  export default {
    components: {
      IconEuro: () => import('../../components/icons/Euro.vue'),
    },
    data() {
      return {
        bancosSel: {},
        prestamo: {
          id: 0,
          tipo: '',
          inicial: 0,
          pendiente: 0,
          cuota: 0,
          banco_id: 0,
        },
        estado: 1,
      }
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      },
      bancos() {
        return this.$store.state.bancos.bancos
      }
    },
    mounted () {
      if (this.expediente.prestamo) {
        this.prestamo = {
          id: this.expediente.prestamo.id,
          tipo: this.expediente.prestamo.tipo,
          inicial: this.expediente.prestamo.inicial,
          pendiente: this.expediente.prestamo.pendiente,
          cuota: this.expediente.prestamo.cuota,
          banco_id: this.expediente.prestamo.banco_id
        }
        this.estado = 2
      } else {
        this.estado = 1
      }
    },
    methods: {
      async submitForm() {
        
        if (this.estado === 1) {
          const data = {
            idExpediente: this.expediente.id,
            prestamo: {
              tipo: this.prestamo.tipo,
              inicial: this.prestamo.inicial,
              pendiente: this.prestamo.pendiente,
              cuota: this.prestamo.cuota,
              banco_id: this.prestamo.banco_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/addPrestamo', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Préstamo actualizado correctamente.')
            } else {
              this.$toast.success('Préstamo creado correctamente.')
            }
            this.$emit('submitform', resp)

            this.estado = 2
          } else {
            this.$toast.error('Error al crear el préstamo.')
          }
        } else {
          const data = {
            idExpediente: this.expediente.id,
            prestamo: {
              id: this.expediente.prestamo.id,
              tipo: this.prestamo.tipo,
              inicial: this.prestamo.inicial,
              pendiente: this.prestamo.pendiente,
              cuota: this.prestamo.cuota,
              banco_id: this.prestamo.banco_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/updatePrestamo', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Préstamo actualizado correctamente.')
            } else {
              this.$toast.success('Préstamo creado correctamente.')
            }
            this.$emit('submitform', resp)

            this.estado = 2
          } else {
            this.$toast.error('Error al crear el préstamo.')
          }
        }
      },
      cancelEdit () {
        this.estado = 2
      },
    },
  }
</script>