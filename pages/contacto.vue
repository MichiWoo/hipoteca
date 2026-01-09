<template>
  <div class="flex flex-col items-center justify-center my-12">
    <div class="hidden w-9/12 mb-16 sm:flex sm:justify-around sm:items-center">
      <div class="flex flex-col items-center justify-center w-3/6 ml-8">
        <h1
          class="text-5xl font-bold text-light-secondary dark:text-dark-accent"
        >
          Contacto
        </h1>
      </div>
      <div class="flex items-center justify-center w-2/6 mr-8">
        <FormContacto class="w-full"></FormContacto>
      </div>
    </div>
    <div class="div-center sm:hidden">
      <h1
        class="text-2xl font-bold sm:text-4xl text-light-secondary dark:text-dark-accent"
      >
        Contacto
      </h1>
    </div>
    <div class="div-center sm:hidden">
      <FormContacto class="w-11/12"></FormContacto>
    </div>
    <div class="w-full my-6 div-center sm:hidden">
      <div class="flex flex-col items-center content-center w-11/12">
        <p
          class="my-2 text-base font-bold text-center sm:text-xl text-light-secondary dark:text-dark-secondary"
        >
          Las oficinas de Hipoteca 10 se encuentran situadas en Madrid en la
          siguiente dirección:
        </p>
        <p
          class="my-2 text-base font-bold text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Hipoteca 10
        </p>
        <p
          class="mt-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Calle Doctor Esquerdo 33.
        </p>
        <p
          class="text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          28028. Madrid
        </p>
        <p
          class="mb-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Teléfono: 910758169
        </p>
        <p
          class="mb-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          <a href="mailto:info@hipoteca10.es"> info@hipoteca10.es </a>
        </p>
      </div>
    </div>
    <div class="w-1/2 max-w-xs my-4 div-center sm:hidden">
      <a
        href="https://www.google.com/maps/place/C.+del+Dr.+Esquerdo,+33,+Salamanca,+28028+Madrid,+Spain/@40.4248818,-3.6687368,20.02z/data=!4m6!3m5!1s0xd4228b1e8bf6c07:0xa9ec17d3697eb86!8m2!3d40.4248733!4d-3.6684105!16s%2Fg%2F11rgfxz5zc?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver ubicación en Google Maps"
      >
        <img
          src="/mapa.png"
          class="w-full h-auto hover:opacity-80 transition-opacity cursor-pointer"
          alt="Mapa de ubicación"
        />
      </a>
    </div>
    <div class="items-center justify-center hidden my-8 sm:flex">
      <div class="flex flex-col items-center content-center w-11/12">
        <p
          class="my-2 text-base font-bold text-center sm:text-xl text-light-secondary dark:text-dark-secondary"
        >
          Las oficinas de Hipoteca 10 se encuentran situadas en Madrid en la
          siguiente dirección:
        </p>
        <p
          class="my-2 text-base font-bold text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Hipoteca 10
        </p>
        <p
          class="mt-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Calle Doctor Esquerdo 33.
        </p>
        <p
          class="text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          28028. Madrid
        </p>
        <p
          class="mb-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          Teléfono: 910758169
        </p>
        <p
          class="mb-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
        >
          <a href="mailto:info@hipoteca10.es"> info@hipoteca10.es </a>
        </p>
      </div>
      <div class="w-1/2 max-w-md my-4 div-center">
        <a
          href="https://www.google.com/maps/place/C.+del+Dr.+Esquerdo,+33,+Salamanca,+28028+Madrid,+Spain/@40.4248818,-3.6687368,20.02z/data=!4m6!3m5!1s0xd4228b1e8bf6c07:0xa9ec17d3697eb86!8m2!3d40.4248733!4d-3.6684105!16s%2Fg%2F11rgfxz5zc?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver ubicación en Google Maps"
        >
          <img
            src="/mapa.png"
            class="w-full h-auto hover:opacity-80 transition-opacity cursor-pointer"
            alt="Mapa de ubicación"
          />
        </a>
      </div>
    </div>
    <div class="w-11/12 my-6 div-center">
      <p
        class="mt-2 text-base text-center sm:text-xl text-light-primary dark:text-dark-primary"
      >
        Para cualquier reclamación o queja, les dejamos enlace a nuestro
        <span class="font-bold">
          <a
            href="procedimiento_ resolucion_de_reclamaciones.pdf"
            target="_blank"
          >
            procedimiento
          </a> </span
        >de resolución de reclamaciones.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  components: {
    FormContacto: () => import('../components/forms/FormContacto'),
  },
  head: {
    title: 'Hipoteca 10 | Contáctanos',
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
