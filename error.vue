<script setup lang="ts">
    const error = useError();
</script>

<template>
    <div class="w-full min-h-screen bg-gray-100 flex justify-center items-center flex-col">
        <h1 class="text-[56px] text-emerald-400 text-center m-auto font-black">Ooops! An error occurred.</h1>
        <p class="text-[20px] text-emerald-400 text-center m-auto font-semibold">Message - {{error.message}}</p>
    </div>
</template>