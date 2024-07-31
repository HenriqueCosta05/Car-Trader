<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

const make = Array.isArray(route.params.make) ? route.params.make[0] : route.params.make;
const city = Array.isArray(route.params.city) ? route.params.city[0] : route.params.city;

useHead({
  title: `${make ? toTitleCase(make) : `Cars`} in ${toTitleCase(city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="mt-32 flex">
    <CarSidebar />
    <NuxtPage />
  </div>
</template>
