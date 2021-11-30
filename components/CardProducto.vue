<template>
  <div class="flex-col w-full py-16 div-center sm:py-32" :class="classCard">
    <div class="flex items-center justify-center mb-6 sm:mb-12">
      <h4 class="text-base font-bold sm:text-3xl">{{ producto.title }}</h4>
    </div>
    <div class="flex flex-col items-center justify-center w-full">
      <div
        v-for="d in producto.data"
        :key="d.id"
        class="flex items-start justify-start w-11/12 my-2 sm:w-4/5"
      >
        <div
          class="flex items-start justify-center mt-1 sm:mx-2 sm:ml-4 sm:mr-2"
        >
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
        <div class="flex items-start justify-start ml-2">
          <p class="text-sm text-justify sm:text-xl">{{ d.text }}</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-12">
        <nuxt-link :to="producto.link"> Mostrar más... </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProducto',
  props: {
    producto: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      classCard: '',
    }
  },
  mounted() {
    this.changeColors()
  },
  methods: {
    changeColors() {
      this.classCard = `card-${this.producto.type}`
    },
  },
}
</script>

<style scoped></style>
