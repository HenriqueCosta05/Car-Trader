<script setup>
const route = useRoute();

function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
useHead({
  title: `${route.params.name ? toTitleCase(route.params.name) : `Car`} Details`
})
</script>

<template>
  <div>
    <Navbar />
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>
