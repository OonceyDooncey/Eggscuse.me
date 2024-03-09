<template>
    <div class="h-full flex flex-col items-center">
        <p
            class="font-poppins text-md md:h-1/6 text-center mt-2 md:text-xl lg:text-2xl">
            Your one stop platform for eggscellent eggscuses
        </p>
        <div class="font-margarine mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <NuxtLink
                to="/search/work"
                class="option-btn md:hover:border-gray-950 transition">
                <NuxtImg
                    format="webp"
                    src="/work_egg.png"
                    sizes="sm:50px md:150px lg:200px"
                    alt="egg thumbnail"
                    class="option-img" />
                <span class="option">Work</span>
            </NuxtLink>
            <NuxtLink
                to="/search/school"
                class="option-btn md:hover:border-gray-950 transition">
                <NuxtImg
                    format="webp"
                    src="/school_egg.png"
                    sizes="sm:50px md:150px lg:200px"
                    alt="egg thumbnail"
                    class="option-img" />
                <span class="option">School</span>
            </NuxtLink>
            <NuxtLink
                to="/search/social"
                class="option-btn md:hover:border-gray-950 transition">
                <NuxtImg
                    format="webp"
                    src="/social_egg.png"
                    sizes="sm:50px md:150px lg:200px"
                    alt="egg thumbnail"
                    class="option-img" />
                <span class="option">Social</span>
            </NuxtLink>
        </div>
    </div>
</template>
