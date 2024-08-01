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
    <NuxtErrorBoundary>
    <CarSidebar></CarSidebar>
    <NuxtPage></NuxtPage>
    <template #error="{ error }">
      <div class="w-full min-h-screen bg-gray-100 flex justify-center items-center flex-col">
        <h1 class="text-[56px] text-emerald-400 text-center m-auto font-black">Ooops! An error occurred.</h1>
        <p class="text-[20px] text-emerald-400 text-center m-auto font-semibold">Message - {{error.message}}</p>
        <button class="bg-emerald-400 text-white px-4 py-2 rounded-md mt-4" @click="error.value = null">
          <NuxtLink to='/'>
            Do another search
          </NuxtLink>
        </button>
      </div>
    </template>
    </NuxtErrorBoundary>
  </div>
</template>
