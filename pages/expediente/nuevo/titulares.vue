<template>
  <div class="flex flex-col justify-start items-start">
    <div class="flex justify-center items-center">
      <button 
        type="button"
        class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
        @click="verForm=true"
      >
        <div class="flex justify-center items-center">
          <IconPlus class="w-5 h-5" />
          <span class="ml-2">Titular</span>
        </div>
      </button>
    </div>
    <div class="flex justify-start items-center">
      <ul>
        <li v-for="(t, index) in titulares" :key="t.id">
          <div class="flex justify-center items-center">
            <span class="mr-2">Titular {{index + 1}} - {{t.nombre}}</span>
            <button type="button" class="text-light bg-light-primary hover:bg-light-danger focus:ring-4 focus:ring-light-primary font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-8/12 flex justify-start items-center my-6">
      <FormTitulares v-show="verForm" :titular="titulares[0]" />
    </div>
  </div>
</template>

<script>
  import FormTitulares from '../../../components/formularios/FormularioTitulares.vue'
  export default {
    components: {
      FormTitulares,
      IconPlus: () => import('../../../components/icons/Plus.vue')
    },
    data() {
      return {
        titulares: [
          { id: 1, nombre: "Michel González", edad: 37, dni: "x1a1x121x2", empleo: "Desarrollador", tipo: 1, antiguedad: 5, salario: 20000, pagos: 8000, renta: 0 },
          { id: 2, nombre: "Yessica Vidal", edad: 40, dni: "rassa1222", empleo: "Ama de Casa", tipo: 5, antiguedad: 10, salario: 1000, pagos: 500, renta: 0 },
        ],
        verForm: false,
      }
    },
  }
</script>