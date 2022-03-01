<template>
  <div class="w-full flex flex-col justify-center items-start">
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="datepicker" class="block mb-2 text-sm font-medium text-light-text">Fecha de Alta</label>
        <Datepicker v-model="expediente.fecha" input-class="bg-light border border-dark text-light-text focus:ring-light-text focus:border-light-text block w-full pl-10 p-2 rounded-lg" name="datepicker" :format="customFormatter" :language="idioma" />
      </div>
      <div class="mb-6">
        <label for="operaciones" class="block mb-2 text-sm font-medium text-light-text">Selecciona la operación</label>
        <select id="operaciones" v-model="expediente.tipo" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2">
          <option v-for="o in operaciones" :key="o.id" :value="o.id">{{ o.nombre }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="estado" class="block mb-2 text-sm font-medium text-light-text">Selecciona la estado</label>
        <select id="estado" v-model="expediente.estado" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2">
          <option v-for="e in estados" :key="e.id" :value="e.id">{{ e.nombre }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="datepicker" class="block mb-2 text-sm font-medium text-light-text">Fecha de la Próxima Llamada</label>
        <Datepicker v-model="expediente.fecha_llamada" input-class="bg-light border border-dark text-light-text focus:ring-light-text focus:border-light-text block w-full pl-10 p-2 rounded-lg" name="datepicker" :format="customFormatter" :language="idioma" />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="viviendaNueva" v-model="expediente.vivienda" aria-describedby="viviendaNueva" type="checkbox" class="w-4 h-4 bg-light rounded border border-light-text focus:ring-3 focus:ring-blue-300">
        </div>
        <div class="ml-3 text-sm">
          <label for="viviendaNueva" class="font-medium text-light-text">Vivienda Nueva</label>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6 w-full">
        <label for="observaciones" class="block mb-2 text-sm font-medium text-light-text">Observaciones</label>
        <textarea id="observaciones" v-model="observaciones" rows="4" class="block p-2 w-full text-sm text-light-text bg-light rounded-lg border border-light-text focus:ring-light-text focus:border-light-text" placeholder="Escribe la observación..."></textarea>
      </div>
    </div>
    <div class="w-full flex justify-between items-center mt-6">
      <span class="text-xl text-light-text font-bold">Datos Registrales</span>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="phone1" class="block mb-2 text-sm font-medium text-light-text">Teléfono 1</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconPhone class="text-light-text w-5 h-5" />
          </div>
          <input id="phone1" v-model="expediente.telefono1" type="phone" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="9100000000">
        </div>
      </div>
      <div class="mb-6">
        <label for="phone2" class="block mb-2 text-sm font-medium text-light-text">Teléfono 2</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconPhone class="text-light-text w-5 h-5" />
          </div>
          <input id="phone2" v-model="expediente.telefono2" type="phone" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="9100000000">
        </div>
      </div>
      <div class="mb-6">
        <label for="email-adress-icon" class="block mb-2 text-sm font-medium text-light-text">Email</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEmail class="text-light-text w-5 h-5" />
          </div>
          <input id="email-adress-icon" v-model="expediente.email" type="email" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="email@correo.es">
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="provincia" class="block mb-2 text-sm font-medium text-light-text">Provincia</label>
        <input id="provincia" v-model="expediente.provincia" type="provincia" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Madrid">
      </div>
      <div class="mb-6">
        <label for="localidad" class="block mb-2 text-sm font-medium text-light-text">Localidad</label>
        <input id="localidad" v-model="expediente.localidad" type="localidad" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Madrid">
      </div>
      <div class="mb-6 w-3/6">
        <label for="direccion" class="block mb-2 text-sm font-medium text-light-text">Dirección de la vivienda</label>
        <input id="direccion" v-model="expediente.direccion" type="direccion" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Madrid">
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="importeCompra" class="block mb-2 text-sm font-medium text-light-text">Importe de la Compra</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="importeCompra" v-model.number="expediente.importe_compra" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="aportacion" class="block mb-2 text-sm font-medium text-light-text">Aportación</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="aportacion" v-model.number="expediente.aportacion" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="valorAproximado" class="block mb-2 text-sm font-medium text-light-text">Valor Aproximado</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="valorAproximado" v-model.number="expediente.valor_aproximado" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="importePrestamo" class="block mb-2 text-sm font-medium text-light-text">Importe del Préstamo</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="importePrestamo" v-model.number="expediente.importe_prestamo" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6 w-2/12">
        <button 
          type="submit"
          class="text-light-text bg-light-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2"
          @click.prevent="handleSubmit"
        >
          <div class="flex justify-center items-center text-light">
            <IconSave class="w-5 h-5" />
            <span class="ml-1 text-xl">Guardar</span>
          </div>
        </button>
      </div>
      <div class="mb-6 w-2/12">
        <button 
          type="submit"
          class="text-light-text bg-light-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2"
          @click.prevent="cancel"
        >
          <div class="flex justify-center items-center text-light">
            <IconSave class="w-5 h-5" />
            <span class="ml-1 text-xl">Cancelar</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { es } from 'vuejs-datepicker/dist/locale'

export default {
  components: {
    Datepicker,
    IconEmail: () => import('../../components/icons/Envelope.vue'),
    IconPhone: () => import('../../components/icons/Phone.vue'),
    IconEuro: () => import('../../components/icons/Euro.vue'),
    IconSave: () => import('../../components/icons/Floppy.vue'),
  },
  data() {
    return {
      idioma: es,
      operaciones: [
        { id: 1, nombre: 'Compraventa' },
        { id: 2, nombre: 'Refinanciación' },
        { id: 3, nombre: 'Capital Privado' },
        { id: 4, nombre: 'Préstamo Personal' },
      ],
      estados: [
        { id: 0, nombre: 'No Contactado' },
        { id: 5, nombre: 'Contactado' },
        { id: 1, nombre: 'Esperando Documentación' },
        { id: 2, nombre: 'Tramitando' },
        { id: 3, nombre: 'Firmando' },
        { id: 4, nombre: 'Fallida' },
      ],
      expediente: {
        fecha: this.$dateFns.format(new Date(), 'dd/MM/yyyy'),
        tipo: 1,
        vivienda: 1,
        estado: 5,
        fecha_llamada: null,
        telefono1: "",
        telefono2: "",
        email: "",
        importe_compra: 0,
        aportacion: 0,
        valor_aproximado: 0,
        importe_prestamo: 0,
        provincia: "",
        localidad: "",
        direccion: "",
        user_id: null,
        prestamo: null,
      },
      observaciones: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.login.user 
    },
  },
  methods: {
    customFormatter(date) {
      return this.$dateFns.format(date, 'dd/MM/yyyy')
    },
    async handleSubmit() {
      console.log(this.user.id)
      this.expediente.user_id = this.user.id
      this.expediente.fecha = this.$dateFns.format(this.expediente.fecha, 'yyyy-MM-dd')
      this.expediente.fecha_llamada = this.$dateFns.format(this.expediente.fecha_llamada, 'yyyy-MM-dd')
      const observacion = {
        texto: this.observaciones,
        fecha: this.expediente.fecha,
        user_id: this.user.id
      }
      console.log(this.expediente)
      console.log(observacion)
      const data = {
        expediente: this.expediente,
        observacion
      }
      const resp = await this.$store.dispatch('expedientes/addExpedientes', data)
      if (Object.keys(resp).length > 0) {
        this.$toast.success('Expediente creado correctamente.')
        this.$emit('submitform', resp)
      } else {
        this.$toast.error('Error al crear el expediente.')

      }
    },
    cancel() {
      this.$emit('cancel', true)
    },
  },
}
</script>