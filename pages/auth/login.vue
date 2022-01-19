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
          class="
            bg-gray-50
            border border-gray-300
            text-dark text-base
            font-semibold
            rounded-lg
            focus:ring-black
            focus:border-dark
            block
            w-full
            p-2
          "
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
          class="
            bg-gray-50
            border border-gray-300
            text-dark text-base
            font-semibold
            rounded-lg
            focus:ring-black
            focus:border-dark
            block
            w-full
            p-2
          "
          placeholder=""
          required
        />
      </div>
      <button
        type="submit"
        class="
          w-full
          text-dark-text
          bg-dark
          hover:bg-black
          focus:ring-4 focus:ring-dark
          font-medium
          rounded-lg
          text-base
          px-5
          py-2
          text-center
          mr-2
          mb-2
        "
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
        nombre: null,
        password: null,
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$auth
          .loginWith('local', { data: this.userForm })
          .then((res) => {
            console.log(res)
            const { data } = res
            console.log(data)
            const token = data.access_token
            const type = data.token_type
            const user = data.user
            const tokenType = `${type} ${token}`
            this.$store.dispatch('login/loguinIn', user, tokenType)
            this.$router.push('/dashboard')
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
