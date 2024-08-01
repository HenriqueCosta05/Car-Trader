<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">Static Select</label>
    <select
      name=""
      id=""
      class="p-2 border w-100 rounded"
      @change="onChange"
      v-model="state"
    >
      <option v-for="option in options" :key="option.id" :value="option">
        Static Option
      </option>
    </select>
  </div>
</template>