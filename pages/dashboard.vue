<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ $auth.user }}</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
