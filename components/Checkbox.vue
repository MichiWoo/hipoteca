<template>
  <div class="relative w-full h-full sm:w-1/6">
    <span
      class="absolute w-12 h-6 outline-none"
      role="checkbox"
      aria-checked="false"
      aria-label="Toggle dark mode"
      tabindex="0"
    >
      <div
        class="w-11/12 h-5 border-2 rounded-full border-light-accent woo-m1"
        :class="modeSel == 'dark' ? 'line-dark' : 'line-light'"
      ></div>
      <div
        class="absolute flex items-center justify-center w-6 h-6 rounded-full -top-1 -left-1"
        :class="modeSel == 'dark' ? 'dark-right' : 'light-left'"
        @click="toggleMode"
      >
        <Moon />
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  components: {
    Moon: () => import('../components/icons/Moon'),
  },
  data() {
    return {
      modeSel: 'light',
    }
  },
  methods: {
    toggleMode() {
      const mode = this.modeSel
      if (mode === 'dark') {
        this.modeSel = 'light'
      } else {
        this.modeSel = 'dark'
      }
      this.$emit('changeMode', this.modeSel)
    },
  },
}
</script>

<style scoped>
.woo-m1 {
  margin-top: 2px;
}

.light-left {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0.03, 0, 1);
  transition-delay: 0s;
  background-color: #042586;
}

.dark-right {
  transform: translateX(24px);
  background-color: #09e1fd;
}

.line-light {
  background-color: #fdfafa;
}

.line-dark {
  background-color: #252e42;
}
</style>
