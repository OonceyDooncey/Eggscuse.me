<template>
    <div class="bg-background h-dvh overflow-hidden">
        <header class="flex justify-center h-1/6 md:justify-between">
            <NuxtLink to="/" class="flex items-center md:ml-8">
                <img
                    src="~/assets/logo.png"
                    alt="Eggscuse.me logo"
                    class="w-16 h-20 md:w-20" />
                <h1
                    class="font-margarine text-title pl-4 text-2xl md:text-3xl lg:text-4xl">
                    Eggscuse.me
                </h1>
            </NuxtLink>
        </header>
        <div class="h-4/6 flex flex-col items-center justify-center">
            <div class="h-80">
                <img src="~/assets/error.png" alt="egg" class="w-60" />
            </div>
            <p class="font-poppins font-semibold text-3xl mt-5">
                Whoops! Something went wrong
            </p>
            <button
                class="bg-gray-950 py-1 px-2 rounded-3xl text-gray-50 font-poppins mt-5"
                @click="handleError">
                Back to home
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
function handleError() {
    clearError({ redirect: "/" });
}
</script>
