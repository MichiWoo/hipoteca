<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex justify-between items-center mx-auto">
      <div class="flex">
        <span class="text-dark font-bold text-base">Inicio</span>
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="text-dark hover:text-light bg-white hover:bg-dark font-bold focus:ring-4 focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0"
          @click="logout"
        >
          {{ user }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: '',
    },
  },
  methods: {
    async logout() {
      const { status, data } = await this.$axios.post('api/logout')
      if (status === 200) {
        console.log(data.message)
        this.$router.push('/auth/login')
      }
    },
  },
}
</script>
