<template>
    <div class="bg-background h-dvh overflow-hidden">
        <header class="flex justify-center h-1/6 md:justify-between">
            <NuxtLink to="/" class="flex items-center md:ml-8">
                <NuxtImg
                    format="webp"
                    src="/logo.png"
                    sizes="sm:50px md:100px lg:150px"
                    alt="Eggscuse.me logo"
                    loading="lazy"
                    class="w-16 h-16 lg:w-20 lg:h-20" />
                <h1
                    class="font-margarine text-title pl-4 text-2xl md:text-3xl lg:text-4xl">
                    Eggscuse.me
                </h1>
            </NuxtLink>
            <NuxtImg
                format="webp"
                src="/egg.svg"
                sizes="150px"
                alt="egg"
                class="w-44 -translate-y-10 rotate-180 hidden md:block" />
        </header>

        <div class="h-4/6">
            <h2
                class="font-poppins font-semibold text-4xl h-1/6 mt-5 text-center md:text-6xl lg:text-7xl">
                What’s Your
                <span class="font-title font-margarine">Eggscuse?</span>
            </h2>
            <slot />
        </div>

        <footer class="h-1/6 flex items-center justify-center relative">
            <NuxtImg
                format="webp"
                src="/egg.svg"
                alt="egg"
                loading="lazy"
                class="w-52 absolute left-0 translate-y-14 -translate-x-4 hidden md:block" />
            <div class="flex flex-col items-center md:flex-row">
                <span class="font-poppins text-base"
                    >Scrambling to give us feedback?</span
                >
                <a
                    href="https://forms.gle/f2uMzcGtANYTcj8A9"
                    class="rounded-2xl bg-gray-950 mt-2 md:ml-2 md:mt-0 px-4 py-1 font-poppins text-gray-50 text-base"
                    target="_blank"
                    >Feedback</a
                >
            </div>
        </footer>
    </div>
</template>
