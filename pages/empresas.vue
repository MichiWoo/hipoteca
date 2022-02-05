<template>
  <div class="flex flex-col items-center justify-center mt-12 sm:mt-4">
    <div class="hidden w-9/12 mb-16 sm:flex sm:justify-around sm:items-center">
      <div class="flex flex-col items-center justify-center w-3/6 ml-8">
        <h1 class="text-5xl font-bold text-light-secondary">Empresas</h1>
        <div class="w-3/6 mt-6 div-center">
          <button
            class="w-full p-3 rounded-lg bg-light-secondary border-light-secondary text-light hover:bg-light-accent hover:ring-2 hover:ring-light-accent hover:ring-opacity-50"
            aria-label="Botón CTA"
          >
            Impulsa tu negocio
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center w-2/6 mr-8">
        <FormEmpresas class="w-full"></FormEmpresas>
      </div>
    </div>
    <div class="items-center justify-center hidden w-11/12 my-12 sm:flex">
      <div
        class="w-full h-1 bg-light-primary border-1 border-light-primary"
      ></div>
    </div>
    <div class="div-center sm:hidden">
      <h1 class="text-2xl font-bold sm:text-4xl text-light-secondary">
        Empresas
      </h1>
    </div>
    <div class="div-center sm:hidden">
      <FormEmpresas class="w-11/12"></FormEmpresas>
    </div>
    <div class="w-11/12 mt-6 div-center sm:hidden">
      <button
        class="w-full p-3 rounded-lg bg-light-secondary border-light-secondary text-light hover:bg-light-accent hover:ring-2 hover:ring-light-accent hover:ring-opacity-50"
        aria-label="Botón CTA"
      >
        Impulsa tu negocio
      </button>
    </div>
    <div class="flex flex-col items-center content-center w-full my-6">
      <div class="w-11/12 my-4 div-center">
        <p
          class="text-lg font-bold text-center sm:text-2xl text-light-secondary"
        >
          Préstamos y Créditos para tu empresa
        </p>
      </div>
      <div class="w-11/12 my-4 div-center">
        <p class="text-sm text-justify sm:text-xl text-light-primary">
          Hacemos un estudio global y personalizado de tu situación, para
          evaluar conforme a los nuevos criterios que solicita la ley 5/2019 del
          5 de mayo, cuál es su perfil de solvencia, para así ofrecerle la mejor
          solución para la financiación de la compra de su vivienda.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col items-center content-center w-full my-6 bg-light-accent sm:my-16"
    >
      <div class="w-11/12 my-4 div-center sm:my-16">
        <p
          class="text-sm font-bold text-center sm:text-xl text-light-secondary"
        >
          ¿Necesita financiación para sus inversiones?
        </p>
      </div>
      <div class="w-11/12 my-4 div-center">
        <p
          class="text-sm font-bold text-center sm:text-xl text-light-secondary"
        >
          ¿Quiere hacer reformas, ampliaciones, en su negocio?
        </p>
      </div>
      <div class="w-11/12 my-4 div-center">
        <p class="text-sm text-justify sm:text-xl text-light-primary">
          En Hipoteca10 le gestionamos préstamos con planes de amortización
          ágiles y adaptados a sus necesidades, sin que su ritmo de tesorería se
          vea alterado por pagos irregulares e importantes:
        </p>
      </div>
      <div class="w-11/12 my-4 div-center">
        <div class="flex items-center justify-center flex-start">
          <div class="flex-col div-center card-accent">
            <div class="flex flex-col justify-center">
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">Póliza de préstamos</p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">
                    Préstamos de amortizaciones constantes
                  </p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">Préstamos hipotecarios</p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">Reestructuración de deuda</p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">Factoring</p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">Líneas ICO</p>
                </div>
              </div>
              <div class="flex items-start flex-justify-center">
                <div class="flex justify-center mx-2 mt-1">
                  <svg
                    class="inline w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                    ></path>
                  </svg>
                </div>
                <div class="flex justify-start ml-2">
                  <p class="text-sm sm:text-xl">
                    Impagos con Seguridad social, Hacienda y embargos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empresas',
  components: {
    FormEmpresas: () => import('../components/forms/FormEmpresas'),
  },
  head: {
    title: 'Hipoteca 10 | Empresas',
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
