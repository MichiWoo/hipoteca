<template>
  <div class="flex flex-col items-center justify-center mt-12 sm:mt-4">
    <div class="hidden w-9/12 mb-16 sm:flex sm:justify-around sm:items-center">
      <div class="flex items-center w-3/6 ml-8 flex-start">
        <h1
          class="text-5xl font-bold text-light-secondary dark:text-dark-accent"
        >
          Nuestro Método<br />de Trabajo
        </h1>
      </div>
      <div class="flex items-center justify-center w-2/6 mr-8">
        <FormEntrevista class="w-full"></FormEntrevista>
      </div>
    </div>
    <div class="my-8 div-center sm:hidden">
      <h1
        class="text-2xl font-bold sm:text-4xl text-light-secondary dark:text-dark-accent"
      >
        Nuestro Método de Trabajo
      </h1>
    </div>
    <div class="div-center sm:hidden">
      <FormEntrevista class="w-11/12"></FormEntrevista>
    </div>
    <div class="w-full center bg-light-accent dark:bg-dark-accent">
      <div class="flex flex-col items-center w-full">
        <div class="flex items-center justify-center w-11/12 my-4 sm:mt-20">
          <h2
            class="text-base font-bold sm:text-2xl text-light-primary dark:text-dark-primary"
          >
            TRAMITACIÓN
          </h2>
        </div>
        <div class="flex flex-col items-center my-6">
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center"
          >
            <div class="flex items-center justify-center">
              <div
                class="flex items-center justify-center w-4 h-4 p-2 border-2 rounded-full sm:h-8 sm:w-8 bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary"
              >
                <span class="text-base">1</span>
              </div>
            </div>
            <div class="flex items-start justify-start ml-4">
              <div
                class="px-2 py-1 text-sm rounded-full bg-light-primary dark:bg-dark-primary text-light dark:text-dark"
              >
                <span class="text-base">ENTREVISTA</span>
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center sm:mt-6"
          >
            <h3
              class="text-sm sm:text-center text-light-secondary dark:text-dark-secondary"
            >
              <span class="text-bas"
                >Tras una conversación contigo, analizamos tu caso y vemos si
                podemos ayudarte.</span
              >
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center my-6">
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center"
          >
            <div class="flex items-center justify-center">
              <div
                class="flex items-center justify-center w-4 h-4 p-2 border-2 rounded-full sm:h-8 sm:w-8 bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary"
              >
                <span class="text-bas">2</span>
              </div>
            </div>
            <div class="flex items-start justify-start ml-4">
              <div
                class="px-2 py-1 text-sm rounded-full bg-light-primary dark:bg-dark-primary text-light dark:text-dark"
              >
                <span class="text-bas">ACUERDO</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start w-11/12 sm:mt-6">
            <h3
              class="text-sm sm:text-center text-light-secondary dark:text-dark-secondary"
            >
              <span class="text-bas"
                >Tras la firma de nuestro contrato de intermediación,
                gestionamos tu hipoteca en aquellos bancos donde lo que
                necesites encaje mejor.</span
              >
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center my-6 sm:justify-center">
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center"
          >
            <div class="flex items-center justify-center">
              <div
                class="flex items-center justify-center w-4 h-4 p-2 border-2 rounded-full sm:h-8 sm:w-8 bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary"
              >
                <span class="text-bas">3</span>
              </div>
            </div>
            <div class="flex items-start justify-start ml-4">
              <div
                class="px-2 py-1 text-sm rounded-full bg-light-primary dark:bg-dark-primary text-light dark:text-dark"
              >
                <span class="text-bas">PRE APROBACIÓN</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start w-11/12 sm:mt-6">
            <h3
              class="text-sm sm:text-center text-light-secondary dark:text-dark-secondary"
            >
              <span class="text-bas"
                >Si conseguimos una pre aprobación de tu operación, y te gusta
                la oferta, pasamos a tasar tu vivienda.</span
              >
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center my-6 sm:justify-center">
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center"
          >
            <div class="flex items-center justify-center">
              <div
                class="flex items-center justify-center w-4 h-4 p-2 border-2 rounded-full sm:h-8 sm:w-8 bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary"
              >
                <span class="text-bas">4</span>
              </div>
            </div>
            <div class="flex items-start justify-start ml-4">
              <div
                class="px-2 py-1 text-sm rounded-full bg-light-primary dark:bg-dark-primary text-light dark:text-dark"
              >
                <span class="text-bas">PREPARACIÓN</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start w-11/12 sm:mt-6">
            <h3
              class="text-sm sm:text-center text-light-secondary dark:text-dark-secondary"
            >
              <span class="text-bas"
                >Con el resultado de la tasación, se prepara la firma,
                ayudándote con el papeleo con los vendedores, y preparando la
                firma con banco y Notario.</span
              >
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center my-6 sm:mt-6 sm:mb-16">
          <div
            class="flex items-center justify-start w-11/12 sm:justify-center"
          >
            <div class="flex items-center justify-center">
              <div
                class="flex items-center justify-center w-4 h-4 p-2 border-2 rounded-full sm:h-8 sm:w-8 bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary"
              >
                <span class="text-bas">5</span>
              </div>
            </div>
            <div class="flex items-start justify-start ml-4">
              <div
                class="px-2 py-1 text-sm rounded-full bg-light-primary dark:bg-dark-primary text-light dark:text-dark"
              >
                <span class="text-bas">FIRMA</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start w-11/12 sm:mt-6">
            <h3
              class="text-sm sm:text-center text-light-secondary dark:text-dark-secondary"
            >
              <span class="text-bas"
                >Firma, cobro de nuestra comisión, si da lugar a ello, y fin de
                nuestros servicios.</span
              >
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuestroMetodo',
  componetes: {
    FormEntrevista: () => import('../components/forms/FormEntrevista'),
  },
  head: {
    title: 'Hipoteca 10 | Nuestro Método de trabajo',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Hipoteca10 está especializada en conseguir para sus clientes financiaciones para compra de vivienda, por encima del 80%.',
      },
    ],
  },
}
</script>
