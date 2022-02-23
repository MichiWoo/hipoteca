<template>
  <div class="mx-auto h-full flex flex-col-reverse sm:flex-row">
    <div class="sm:w-48">
      <Sidebar />
    </div>
    <div class="h-full w-full flex-col items-start">
      <div class="h-10 m-1 sm:m-4 bg-info">
        <div class="flex justify-between items-start">
      <div class="border-b border-light-primary">
        <ul class="flex flex-wrap -mb-px">
          <router-link to="/expediente/nuevo">
            <li class="mr-2">
              <a
                href="#"
                class="inline-flex py-4 px-4 text-sm font-medium text-center text-light-text rounded-t-lg hover:text-light-text hover:border-text-light-text group"
              >
                <svg
                  class="mr-2 w-5 h-5 text-light-text group-hover:text-light-text"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>Expediente
              </a>
            </li>
          </router-link>
          <router-link to="/expediente/nuevo/titulares">
            <li class="mr-2">
              <a
                href="#"
                class="inline-flex py-4 px-4 text-sm font-medium text-center text-light-text rounded-t-lg group"
                aria-current="page"
              >
                <svg
                  class="mr-2 w-5 h-5 text-light-text dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>Titulares
              </a>
            </li>
          </router-link>
          <router-link to="/expediente/nuevo/prestamo">
            <li class="mr-2">
              <a
                href="#"
                class="inline-flex py-4 px-4 text-sm font-medium text-center text-light-text rounded-t-lg hover:text-light-text hover:border-text-light-text group"
              >
                <svg
                  class="mr-2 w-5 h-5 text-light-text group-hover:text-light-text"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                  />
                </svg>Préstamo
              </a>
            </li>
          </router-link>
          <router-link to="/expediente/nuevo/banco">
            <li class="mr-2">
              <a
                href="#"
                class="inline-flex py-4 px-4 text-sm font-medium text-center text-light-text rounded-t-lg hover:text-light-text hover:border-text-light-text group"
              >
                <svg
                  class="mr-2 w-5 h-5 text-light-text group-hover:text-light-text"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  />
                </svg>Banco
              </a>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <router-link to="/dashboard">
          <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-light transition-colors duration-150 bg-light-primary rounded-full focus:shadow-outline hover:bg-indigo-800">
            <IconClose class="w-4 h-4" />
          </button>
        </router-link>
      </div>
    </div>
      </div>
      <div class="m-2 sm:m-12">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => import('../components/dashboard/Sidebar.vue'),
    IconClose: () => import('../components/icons/Times.vue'),
  },
  computed: {
    user() {
      return this.$store.state.login.user
    },
    loguinIn() {
      return this.$store.state.login.loggedIn
    },
  },
}
</script>