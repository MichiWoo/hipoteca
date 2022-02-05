<template>
  <div class="w-3/12">
    <form @submit.prevent="onSubmit">
      <div class="mb-6">
        <label for="user" class="block mb-2 text-base font-bold text-dark"
          >Usuario</label
        >
        <input
          v-model="userForm.nombre"
          type="text"
          class="bg-gray-50 border border-gray-300 text-dark text-base font-semibold rounded-lg focus:ring-black focus:border-dark block w-full p-2"
          placeholder=""
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-base font-bold text-dark"
          >Contraseña</label
        >
        <input
          v-model="userForm.password"
          type="password"
          class="bg-gray-50 border border-gray-300 text-dark text-base font-semibold rounded-lg focus:ring-black focus:border-dark block w-full p-2"
          placeholder=""
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-dark-text bg-dark hover:bg-black focus:ring-4 focus:ring-dark font-medium rounded-lg text-base px-5 py-2 text-center mr-2 mb-2"
      >
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        nombre: 'Michel',
        password: '12345678',
      },
    }
  },
  methods: {
    async onSubmit() {
      const resp = await this.$store.dispatch('login/loguinUser', this.userForm)
      if (resp) {
        this.$router.push('/dashboard')
      }
    },
  },
}
</script>
