<template>
 <div class="flex flex-col items-center mt-5">
  <div class="option-btn">
   <span class="option">{{ category }}</span>
  </div>
  <div class="mt-14">
   <p class="text-2xl font-poppins">This is the title of the excuse</p>
  </div>
  <div class="grid grid-cols-2 mt-10 gap-5">
   <button class="p-2 bg-gray-950 rounded-lg">
    <img src="~/assets/restart.svg" alt="regenerate" class="w-9 h-9">
   </button>
   <NuxtLink to="/" class="p-2 bg-gray-950 rounded-lg">
    <img src="~/assets/home.svg" alt="back to homepage" class="w-9 h-9">
   </NuxtLink>
  </div>
 </div>
</template>

<script setup lang="ts">
const { category } = useRoute().params

if (category === "work") {
 //fetch data for work
}

if (category === "school") {
 //fetch data for school
}

if (category === "social") {
 //fetch data for social
}

</script>
