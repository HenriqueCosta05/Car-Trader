<template>
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">Static Textarea</label>
    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    ></textarea>
  </div>
</template>