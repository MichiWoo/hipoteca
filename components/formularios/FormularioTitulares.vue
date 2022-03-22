<template>
  <div class="w-full flex flex-col justify-center items-start">
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="nombre" class="block mb-2 text-sm font-medium text-light-text">Nombre</label>
        <input id="nombre" v-model="persona.nombre" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Nombre Completo">
      </div>
      <div class="mb-6">
        <label for="edad" class="block mb-2 text-sm font-medium text-light-text">Edad</label>
        <input id="edad" v-model.number="persona.edad" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="18+">
      </div>
      <div class="mb-6">
        <label for="dni" class="block mb-2 text-sm font-medium text-light-text">DNI</label>
        <input id="dni" v-model="persona.dni" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="123456890">
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="empleo" class="block mb-2 text-sm font-medium text-light-text">Empleo</label>
        <input id="empleo" v-model="persona.empleo" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Nombre Empleo">
      </div>
      <div class="mb-6">
        <label for="tipoContrato" class="block mb-2 text-sm font-medium text-light-text">Selecciona el Tipo de Contrato</label>
        <select id="tipoContrato" v-model.number="persona.tipo_contrato" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2">
          <option v-for="tc in tiposContrato" :key="tc.id" :value="tc.id">{{ tc.nombre }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="antiguedad" class="block mb-2 text-sm font-medium text-light-text">Antigüedad (Años)</label>
        <input id="antiguedad" v-model.number="persona.antiguedad" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="10">
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="salario" class="block mb-2 text-sm font-medium text-light-text">Salario</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="salario" v-model.number="persona.salario" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="pagos" class="block mb-2 text-sm font-medium text-light-text">Pagos</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="pagos" v-model.number="persona.pagos" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="renta" class="block mb-2 text-sm font-medium text-light-text">Renta</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="renta" v-model.number="persona.renta" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <button 
        type="button"
        class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
        @click="submitForm"
      >
          Guardar
      </button>
      <button 
        type="button"
        class="text-dark bg-light-accent hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 mx-1"
        @click="closeForm"
      >
          Cerrar
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
        tiposContrato: [
          { id: 1, nombre: 'Indefinido'},
          { id: 2, nombre: 'Funcionario'},
          { id: 3, nombre: 'Temporal'},
          { id: 4, nombre: 'Autónomo'},
          { id: 5, nombre: 'Empleada del Hogar'},
        ],
        persona: {
          id: this.titular? this.titular.id : '',
          nombre: this.titular? this.titular.nombre: '',
          edad: this.titular? this.titular.edad: '',
          dni: this.titular? this.titular.dni : '',
          empleo: this.titular? this.titular.empleo : '',
          tipo: this.titular? this.titular.tip : 1,
          antiguedad: this.titular? this.titular.antiguedad : 0,
          salario: this.titular? this.titular.salario : 0,
          pagos: this.titular? this.titular.pagos : 0,
          renta: this.titular? this.titular.renta : 0,
        },
      }
    },
    computed: {
      expediente() {
        return this.$store.state.expedientes.expedienteSel
      },
      titular() {
        return this.$store.state.expedientes.titularSel
      },
    },
    methods: {
      async submitForm() {
        const data = {
          idExpediente: this.expediente.id,
          titular: {
            nombre: this.persona.nombre,
            edad: this.persona.edad,
            dni: this.persona.dni,
            empleo: this.persona.empleo,
            tipo_contrato: this.persona.tipo_contrato,
            antiguedad: this.persona.antiguedad,
            salario: this.persona.salario,
            pagos: this.persona.pagos,
            renta: this.persona.renta
          }
        }
        const resp = await this.$store.dispatch('expedientes/addTitular', data)
        if (Object.keys(resp).length > 0) {
          this.$toast.success('Titular creado correctamente.')
          this.$emit('submitform', resp)
        } else {
          this.$toast.error('Error al crear el titular.')
        }
      },
      closeForm() {
        this.$emit('submitform', 'close')
      },
    },
  }
</script>
