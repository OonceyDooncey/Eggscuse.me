<template>
  <div class="h-full flex flex-col items-center">
    <h2
      class="font-poppins font-semibold text-4xl h-1/6 mt-5 text-center md:text-6xl lg:text-7xl"
    >
      What’s Your <span class="font-title font-margarine">Eggscuse?</span>
    </h2>
    <p
      class="font-poppins text-md md:h-1/6 text-center mt-2 md:text-xl lg:text-2xl"
    >
      Your one stop platform for eggscellent eggscuses
    </p>
    <div class="font-margarine mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      <NuxtLink to="/search/work" class="option-btn">
        <span class="option">Work</span>
      </NuxtLink>
      <NuxtLink to="/search/school" class="option-btn">
        <span class="option">School</span>
      </NuxtLink>
      <NuxtLink to="/search/social" class="option-btn">
        <span class="option">Social</span>
      </NuxtLink>
    </div>
  </div>
</template>
