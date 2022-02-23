<template>
  <div class="w-full flex flex-col justify-center items-start">
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="nombre" class="block mb-2 text-sm font-medium text-light-text">Nombre</label>
        <input id="nombre" v-model="persona.nombre" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="Nombre Completo">
      </div>
      <div class="mb-6">
        <label for="edad" class="block mb-2 text-sm font-medium text-light-text">Edad</label>
        <input id="edad" v-model="persona.edad" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="18+">
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
        <select id="tipoContrato" v-model="persona.tipo" class="bg-light border border-dark text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2">
          <option v-for="tc in tiposContrato" :key="tc.id" :value="tc.id">{{ tc.nombre }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="antiguedad" class="block mb-2 text-sm font-medium text-light-text">Antigüedad (Años)</label>
        <input id="antiguedad" v-model="persona.antiguedad" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full p-2" placeholder="10">
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="mb-6">
        <label for="salario" class="block mb-2 text-sm font-medium text-light-text">Salario</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="salario" v-model="persona.salario" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="pagos" class="block mb-2 text-sm font-medium text-light-text">Pagos</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="pagos" v-model="persona.pagos" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
      <div class="mb-6">
        <label for="renta" class="block mb-2 text-sm font-medium text-light-text">Renta</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconEuro class="text-light-text w-5 h-5" />
          </div>
          <input id="renta" v-model="persona.renta" type="text" class="bg-light border border-light-text text-light-text text-sm rounded-lg focus:ring-light-text focus:border-light-text block w-full pl-10 p-2" placeholder="00.00">
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center">
      <button 
        type="button"
        class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-light-danger font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        @click="submitForm"
      >
          Guardar
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      IconEuro: () => import('../../components/icons/Euro.vue'),
    },
    props: {
      titular: {
        type: Object,
        default: () => {},
      },
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
          id: this.titular.id,
          nombre: this.titular.nombre,
          edad: this.titular.edad,
          dni: this.titular.dni,
          empleo: this.titular.empleo,
          tipo: this.titular.tipo,
          antiguedad: this.titular.antiguedad,
          salario: this.titular.salario,
          pagos: this.titular.pagos,
          renta: this.titular.renta,
        },
      }
    },
    methods: {
      submitForm() {
        console.log('submit')
      }
    },
  }
</script>
