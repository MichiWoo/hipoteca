<template>
  <div
    class="sm:h-10 flex-shrink-0 sm:py-4 flex flex-row justify-start items-center sm:flex-col sm:min-h-screen w-full bg-light-text"
  >
    <router-link to="/">
      <div
        class="hidden text-lg font-semibold tracking-widest text-light-accent uppercase rounded-lg focus:outline-none focus:shadow-outline my-8 sm:block"
      >
        Hipoteca 10
      </div>
    </router-link>
    <nav
      class="flex flex-row justify-around sm:flex-col w-full md:block sm:pb-0 sm:overflow-y-auto"
    >
      <router-link to="/dashboard">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              <IconFolder class="text-light-accent w-3 h-3" />
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Expedientes
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/formularios">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              <IconForm class="text-light-accent w-3 h-3" />
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Formularios
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              Icon
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Tareas
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              Icon
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Emails
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/conexiones">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              <IconWifi class="text-light-accent w-3 h-3" />
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Conexiones
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              Icon
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Asignar
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard">
        <div
          class="bg-light-text sm:px-2 flex justify-center items-center hover:text-blue-100 focus:text-blue-100 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
        >
          <div
            class="sm:w-full sm:my-2 sm:mr-2 flex sm:flex-row justify-center sm:justify-start items-center"
          >
            <div
              class="w-full sm:w-1/6 flex justify-center items-center m-4 sm:ml-4 sm:my-4 text-light-accent"
            >
              <IconGear class="text-light-accent w-4 h-4" />
            </div>
            <div
              class="hidden w-5/6 sm:flex justify-center text-base font-normal text-light-accent"
            >
              Configuración
            </div>
          </div>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    IconGear: () => import('../icons/Gear.vue'),
    IconFolder: () => import('../icons/Folder.vue'),
    IconForm: () => import('../icons/Formulario.vue'),
    IconWifi: () => import('../icons/Wifi.vue'),
  },
}
</script>
