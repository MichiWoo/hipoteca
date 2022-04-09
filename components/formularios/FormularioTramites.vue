<template>
  <div class="w-full flex flex-col justify-center items-start">
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="banco" class="block mb-2 text-sm font-medium text-light-text">Selecciona el Banco</label>
        <select id="banco" v-model.number="tramite.banco_id" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2"
          :disabled="estado == 2"
        >
          <option v-for="b in bancos" :key="b.id" :value="b.id">{{ b.nombre }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="datepicker" class="block mb-2 text-sm font-medium text-light-text">Fecha de Presentación</label>
        <Datepicker v-model="tramite.fecha_presentacion" input-class="bg-light border border-dark text-light-text focus:ring-light-text focus:border-light-text block w-full pl-10 p-2 rounded-lg" name="datepicker" :format="customFormatter" :language="idioma" />
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="datepicker" class="block mb-2 text-sm font-medium text-light-text">Fecha de Resolución</label>
        <Datepicker v-model="tramite.fecha_resolucion" input-class="bg-light border border-dark text-light-text focus:ring-light-text focus:border-light-text block w-full pl-10 p-2 rounded-lg" name="datepicker" :format="customFormatter" :language="idioma" />
      </div>
      <div class="mb-6">
        <label for="estadoTramite" class="block mb-2 text-sm font-medium text-light-text">Selecciona el estado</label>
        <select id="estadoTramite" v-model.number="tramite.estado" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2"
          :disabled="estado == 2"
        >
          <option v-for="e in estadostramite" :key="e.id" :value="e.id">{{ e.estado }}</option>
        </select>
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
        v-show="estado == 1 || estado == 2"
        type="button"
        class="text-dark bg-light-accent hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
        @click="closeForm"
      >
          Cerrar
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
  import Datepicker from 'vuejs-datepicker'
  import { es } from 'vuejs-datepicker/dist/locale'
  export default {
    components: {
      Datepicker,
    },
    props: {
      estatus: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        idioma: es,
        bancosSel: {},
        tramite: {
          id: this.tramiteSel ? this.tramiteSel.id : '',
          fecha_presentacion: this.tramiteSel ? this.tramiteSel.fecha_presentacion : new Date(),
          fecha_resolucion: this.tramiteSel ? this.tramiteSel.fecha_resolucion : '',
          estado: this.tramiteSel ? this.tramiteSel.estado : 0,
          banco_id: this.tramiteSel ? this.tramiteSel.banco_id : 0,
        },
        estadostramite: [
          { id: 0, estado: 'Pendiente' },
          { id: 1, estado: 'Aprobada' },
          { id: 2, estado: 'Denegada' },
        ],
        estado: this.estatus,
      }
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      },
      bancos() {
        return this.$store.state.bancos.bancos
      },
      tramiteSel() {
        return this.$store.state.expedientes.tramiteSel
      },
    },
    mounted () {
      if (Object.keys(this.tramiteSel).length > 0) {
        this.tramite = {
          id: this.tramiteSel.id,
          fecha_presentacion: this.tramiteSel.tipo,
          fecha_resolucion: this.tramiteSel.inicial,
          estado: this.tramiteSel.pendiente,
          banco_id: this.tramiteSel.banco_id
        }
        this.estado = 2
      } else {
        this.estado = 1
      }
    },
    methods: {
      customFormatter(date) {
        return this.$dateFns.format(date, 'dd/MM/yyyy')
      },
      async submitForm() {
        
        if (this.estado === 1) {
          const fechaPresentacion = this.$dateFns.format(this.tramite.fecha_presentacion, "yyyy-MM-dd")
          const fechaResolucion = this.$dateFns.format(this.tramite.fecha_resolucion, "yyyy-MM-dd")
          const data = {
            idExpediente: this.expediente.id,
            tramite: {
              fecha_presentacion: fechaPresentacion,
              fecha_resolucion: fechaResolucion,
              estado: this.tramite.estado,
              banco_id: this.tramite.banco_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/addtramite', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Trámite agregado correctamente.')

            } else {
              this.$toast.success('Trámite creado correctamente.')
            }
            this.$emit('closeForm', true)

            this.estado = 2
          } else {
            this.$toast.error('Error al crear el Trámite.')
          }
        } else {
          const fechaPresentacion = this.$dateFns.format(this.tramite.fecha_presentacion, "yyyy-MM-dd")
          const fechaResolucion = this.$dateFns.format(this.tramite.fecha_resolucion, "yyyy-MM-dd")
          const data = {
            idExpediente: this.expediente.id,
            tramite: {
              id: this.tramiteSel.id,
              fecha_presentacion: fechaPresentacion,
              fecha_resolucion: fechaResolucion,
              estado: this.tramite.estado,
              banco_id: this.tramite.banco_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/updatetramite', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Trámite agregado correctamente.')
            } else {
              this.$toast.success('El Trámite no se creado.')
            }
            this.$emit('closeForm', true)

            this.estado = 2
          } else {
            this.$toast.error('Error al actualizar el Trámite.')
          }
        }
      },
      cancelEdit () {
        this.estado = 2
      },
      closeForm () {
        this.$emit('closeForm', true)
      },
    },
  }
</script>