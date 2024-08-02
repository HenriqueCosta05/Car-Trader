<<<<<<< HEAD
=======
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const { cars } = useCars();

const favorite = useLocalStorage("favorite", []);

const handleFavoriteCars = (id: number) => {
  if (JSON.stringify(id) in favorite.value) delete favorite.value[id];
  else favorite.value = { ...favorite.value, [id]: true };
};
</script>
>>>>>>> f33cb1a (bugfix: fixing yarn local issues)
<template>
  <div>
    <CarCards />
  </div>
</template>
