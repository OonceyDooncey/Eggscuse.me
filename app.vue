<script setup lang="ts">
useSeoMeta({
    title: "Eggscuse.me",
    ogTitle: "Eggscuse.me",
    description:
        "Excuse Generator, your one stop platform for eggscellent eggscuses.",
    ogDescription:
        "Excuse Generator, your one stop platform for eggscellent eggscuses.",
    ogImage: "/ogImage.jpg",
    twitterCard: "summary_large_image",
});
useHead({
    htmlAttrs: {
        lang: "en",
    },
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
        },
    ],
});
</script>

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
    transform: translateX(1000px);
}
</style>
