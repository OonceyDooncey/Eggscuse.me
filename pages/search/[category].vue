<template>
    <div class="flex flex-col items-center mt-5">
        <div class="option-btn">
            <NuxtImg
                format="webp"
                :src="url"
                sizes="sm:50px md:150px lg:200px"
                alt="egg thumbnail"
                class="option-img" />
            <span class="option">{{ category }}</span>
        </div>
        <div class="mt-14 flex flex-col items-center relative">
            <div
                class="w-fit bg-title p-2 rounded-2xl flex absolute items-center"
                ref="loaderContainer">
                <div class="loader"></div>
                <span
                    class="text-lg text-center md:text-2xl font-poppins block text-white">
                    Generating...
                </span>
            </div>
            <p
                class="text-xl text-center md:text-2xl font-poppins h-24 md:h-10">
                {{ excuse }}
            </p>
        </div>
        <div class="grid grid-cols-2 mt-10 gap-5">
            <button
                class="p-2 bg-gray-950 rounded-lg"
                @click="
                    fetchExcuse(category);
                    fetchingData(true);
                ">
                <NuxtImg
                    format="webp"
                    src="/icon/restart.svg"
                    sizes="sm:30px md:60px lg:90px"
                    alt="regenerate"
                    class="w-9 h-9" />
            </button>
            <NuxtLink to="/" class="p-2 bg-gray-950 rounded-lg">
                <NuxtImg
                    format="webp"
                    src="/icon/home.svg"
                    sizes="sm:30px md:60px lg:90px"
                    alt="back to homepage"
                    class="w-9 h-9" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const { category } = useRoute().params;
const excuse = ref("");
const loaderContainer = ref();

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

        fetchingData(false);
        excuse.value = data;
    } catch (error) {
        console.error("Error:", error);
        doShowError("Error occurred");
    }
}, 1000);
fetchExcuse(category);

const fetchingData = (fetching: boolean) => {
    if (fetching === false) {
        loaderContainer.value.classList.add("loaded");
    } else {
        loaderContainer.value.classList.remove("loaded");
        excuse.value = "";
    }
};

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

<style scoped>
.loader {
    width: 35px;
    padding: 6px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: white;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: loading 1s infinite linear;
    margin-right: 0.5rem;
}

.loaded {
    animation: fade-out 0.1s forwards linear;
}

@keyframes loading {
    to {
        transform: rotate(1turn);
    }
}

@keyframes fade-out {
    to {
        opacity: 0;
        display: none;
    }
}
</style>
