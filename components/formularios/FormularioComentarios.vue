<template>
  <div class="w-full flex flex-col justify-center items-start">

    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="comentario" class="block mb-2 text-sm font-medium text-light-text">Comentario</label>
        <input id="comentario" v-model="comentario.texto" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Escribe tu comentario">
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
  export default {
    props: {
      estatus: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        comentario: {
          id: this.comentarioSel ? this.comentarioSel.id : '',
          texto: this.comentarioSel ? this.comentarioSel.texto : '',
          fecha: this.comentarioSel ? this.comentarioSel.fecha : '',
          user_id: this.comentarioSel ? this.comentarioSel.user_id : 0,
        },
        estado: this.estatus,
      }
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      },
      comentarioSel() {
        return this.$store.state.expedientes.comentarioSel
      },
    },
    mounted () {
      if (Object.keys(this.comentarioSel).length > 0) {
        this.comentario = {
          id: this.comentarioSel.id,
          texto: this.comentarioSel.texto,
          fecha: this.comentarioSel.fecha,
          user_id: this.comentarioSel.user_id,
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
          const fecha = this.$dateFns.format(this.comentario.fecha, "yyyy-MM-dd")
          const data = {
            idExpediente: this.expediente.id,
            comentario: {
              texto: this.comentarioSel.texto,
              fecha,
              user_id: this.comentarioSel.user_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/addComentario', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Comentario agregado correctamente.')

            } else {
              this.$toast.success('Comentario creado correctamente.')
            }
            this.$emit('closeForm', true)

            this.estado = 2
          } else {
            this.$toast.error('Error al crear el Comentario.')
          }
        } else {
          const fechaPresentacion = this.$dateFns.format(this.tramite.fecha_presentacion, "yyyy-MM-dd")
          const fechaResolucion = this.$dateFns.format(this.tramite.fecha_resolucion, "yyyy-MM-dd")
          const data = {
            idExpediente: this.expediente.id,
            tramite: {
              id: this.comentarioSel.id,
              fecha_presentacion: fechaPresentacion,
              fecha_resolucion: fechaResolucion,
              estado: this.tramite.estado,
              banco_id: this.tramite.banco_id,
            }
          }
          const resp = await this.$store.dispatch('expedientes/updatetramite', data)
          if (Object.keys(resp).length > 0) {
            if (this.estado === 3) {
              this.$toast.success('Comentario agregado correctamente.')
            } else {
              this.$toast.success('El Comentario no se creado.')
            }
            this.$emit('closeForm', true)

            this.estado = 2
          } else {
            this.$toast.error('Error al actualizar el Comentario.')
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