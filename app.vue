<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-leave-to {
  filter: blur(1rem);
  transform: translateX(-1500px);
}

.page-enter-from {
  transform: translateX(1000px)
}
</style>
