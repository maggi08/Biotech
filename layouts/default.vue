<template>
  <div class="">
    <BHeader />
    <main class="min-h-screen" :class="{ 'py-16': $route.path !== '/' }">
      <Nuxt />
    </main>
    <BFooter />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
