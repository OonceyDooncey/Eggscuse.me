<template>
    <div class="flex flex-col items-center mt-5">
        <div class="option-btn">
            <img :src="url" alt="egg thumbnail" class="option-img" />
            <span class="option">{{ category }}</span>
        </div>
        <div class="mt-14">
            <p class="text-xl text-center md:text-2xl font-poppins">
                {{ excuse }}
            </p>
        </div>
        <div class="grid grid-cols-2 mt-10 gap-5">
            <button
                class="p-2 bg-gray-950 rounded-lg"
                @click="fetchExcuse(category)">
                <img
                    src="~/assets/restart.svg"
                    alt="regenerate"
                    class="w-9 h-9" />
            </button>
            <NuxtLink to="/" class="p-2 bg-gray-950 rounded-lg">
                <img
                    src="~/assets/home.svg"
                    alt="back to homepage"
                    class="w-9 h-9" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const { category } = useRoute().params;
const excuse = ref("");

const fetchExcuse = debounce(async (selectedCategory: string | string[]) => {
    //fetch data for the excuse
    try {
        // Fetch data for the excuse
        const { data, status, message } = await $fetch("/api/excuse", {
            query: { category: selectedCategory },
        });

        if (status !== 200) {
            console.log(message);
            doShowError("Error fetching data");
            return;
        }

        if (data === null) {
            console.log("No data");
            doShowError("No data");
            return;
        }

        excuse.value = data;
    } catch (error) {
        console.error("Error:", error);
        doShowError("Error occurred");
    }
}, 1000);
fetchExcuse(category);

const doShowError = (message: string) => {
    showError({
        statusCode: 404,
        statusMessage: message,
    });
};

type FuncType = (...args: any[]) => any;

function debounce<T extends FuncType>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    let immediate = true;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        if (immediate) {
            func.apply(this, args);
            immediate = false;
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            immediate = true;
        }, delay);
    };
}

let url = ref("");

if (category === "work") {
    url.value = "/work_egg.png";
}

if (category === "school") {
    url.value = "/school_egg.png";
}

if (category === "social") {
    url.value = "/social_egg.png";
}
</script>
