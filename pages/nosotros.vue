<template>
  <div class="flex flex-col items-center justify-center mt-12">
    <div class="hidden w-7/12 mb-16 sm:flex sm:justify-around sm:items-center">
      <div class="flex flex-col items-center justify-center w-3/6 ml-8">
        <h1
          class="text-5xl font-bold text-light-secondary dark:text-dark-accent"
        >
          Sobre Nosotros
        </h1>
      </div>
      <div class="flex items-center justify-center w-3/6 mr-8">
        <FormContrato class="w-full"></FormContrato>
      </div>
    </div>
    <div class="div-center sm:hidden">
      <h1
        class="text-2xl font-bold sm:text-4xl text-light-secondary dark:text-dark-accent"
      >
        Sobre Nosotros
      </h1>
    </div>
    <div class="div-center sm:hidden">
      <FormContrato class="w-11/12"></FormContrato>
    </div>
    <div
      class="flex flex-col items-center w-full my-6 bg-light-primary dark:bg-dark-primary sm:my-16 sm:py-16"
    >
      <div class="w-11/12 my-4 div-center sm:my-6">
        <p
          class="text-sm text-justify sm:text-xl text-light-accent dark:text-dark"
        >
          <span class="font-bold">Hipoteca 10,</span>nace para dar repuesta a
          todos aquellos clientes, que necesitan sobre todo hipotecas 100%.
        </p>
      </div>
      <div class="w-11/12 my-4 div-center sm:my-6">
        <p
          class="text-sm text-justify sm:text-xl text-light-accent dark:text-dark"
        >
          El equipo gestor de Hipoteca10, formado en su mayoría por licenciados
          en derecho, económicas y empresariales, cuenta con una amplia
          experiencia en la intermediación financiera, llevando más de 20 años
          trabajando en el sector.
        </p>
      </div>
    </div>
    <div class="w-11/12 sm:w-2/6 div-center sm:my-16">
      <FormScrum class="w-full"></FormScrum>
    </div>
    <div
      class="flex flex-col items-center w-full my-6 bg-light-accent dark:bg-dark-accent sm:my-16 sm:py-16"
    >
      <div class="w-11/12 my-4 div-center">
        <p
          class="text-sm text-center sm:text-xl text-light-primary dark:text-dark-secondary"
        >
          La experiencia que nos ha proporcionado el tiempo, unidos a nuestros
          conocimientos, nos ha permitido, crear un gran equipo de trabajo, que
          sabrá atender de manera correcta y plenamente satisfactoria, sus
          exigencias.
        </p>
      </div>
      <div class="w-11/12 my-4 div-center">
        <p
          class="text-sm text-center sm:text-xl text-light-primary dark:text-dark-secondary"
        >
          Así mismo, tantos años trabajando en el sector, nos han proporcionado
          una amplia red de contactos, dentro del sector bancario, trabajando
          solo con aquellos profesionales, que piensan de verdad en el cliente y
          luchan por su operación, para que usted pueda disponer finalmente de
          la financiación que anda buscando.
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center w-full my-6 sm:my-16">
      <div class="w-11/12 my-4 div-center">
        <p
          class="text-lg font-bold text-center text-light-secondary dark:text-dark-secondary"
        >
          Podemos decir con orgullo, que nuestro éxito se basa en cuatro pilares
          fundamentales, como son:
        </p>
      </div>
    </div>
    <div class="div-center sm:hidden">
      <div class="w-11/12 my-4 div-center">
        <div
          class="flex items-center justify-center w-4/6 h-24 px-6 py-3 mx-2 rounded-lg bg-light-primary dark:bg-dark-primary"
        >
          <p class="text-sm font-bold text-center text-light dark:text-dark">
            Experiencia
          </p>
        </div>
        <div
          class="flex items-center justify-center w-4/6 h-24 px-6 py-3 mx-2 rounded-lg bg-light-primary dark:bg-dark-primary"
        >
          <p class="text-sm font-bold text-center text-light dark:text-dark">
            Transparencia total en nuestra gestión
          </p>
        </div>
      </div>
    </div>
    <div class="div-center sm:hidden">
      <div class="w-11/12 my-4 div-center">
        <div
          class="flex items-center justify-center w-4/6 h-24 px-6 py-3 mx-2 rounded-lg bg-light-primary dark:bg-dark-primary"
        >
          <p class="text-sm font-bold text-center text-light dark:text-dark">
            Profesionalidad
          </p>
        </div>
        <div
          class="flex items-center justify-center w-4/6 h-24 px-6 py-3 mx-2 rounded-lg bg-light-primary dark:bg-dark-primary"
        >
          <p class="text-sm font-bold text-center text-light dark:text-dark">
            Empatía total con nuestros clientes
          </p>
        </div>
      </div>
    </div>
    <div class="hidden w-11/16 sm:flex sm:justify-center sm:flex-wrap">
      <div
        class="flex items-center justify-center w-2/6 px-6 py-16 mx-8 my-8 rounded-lg bg-light-primary dark:bg-dark-primary"
      >
        <p
          class="text-sm font-bold text-center sm:text-xl text-light dark:text-dark"
        >
          Experiencia
        </p>
      </div>
      <div
        class="flex items-center justify-center w-2/6 px-6 py-16 mx-8 my-8 rounded-lg bg-light-primary dark:bg-dark-primary"
      >
        <p
          class="text-sm font-bold text-center sm:text-xl text-light dark:text-dark"
        >
          Transparencia total en nuestra gestión
        </p>
      </div>
      <div
        class="flex items-center justify-center w-2/6 px-6 py-16 mx-8 my-8 rounded-lg bg-light-primary dark:bg-dark-primary"
      >
        <p
          class="text-sm font-bold text-center sm:text-xl text-light dark:text-dark"
        >
          Profesionalidad
        </p>
      </div>
      <div
        class="flex items-center justify-center w-2/6 px-6 py-16 mx-8 my-8 rounded-lg bg-light-primary dark:bg-dark-primary"
      >
        <p
          class="text-sm font-bold text-center sm:text-xl text-light dark:text-dark"
        >
          Empatía total con nuestros clientes
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nosotros',
  components: {
    FormContrato: () => import('../components/forms/FormContrato'),
    FormScrum: () => import('../components/forms/FormScrum'),
  },
  head: {
    title: 'Hipoteca 10 | Sobre Nosotros',
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
