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

interface ExcuseObject {
    status: number;
    data: string;
    message: string;
}
const fetchExcuse = async (selectedCategory: string | string[]) => {
    //fetch data for the excuse

    const { data, status } = await useFetch("/api/excuse", {
        query: { category: selectedCategory },
    });

    if (data.value === null) {
        console.log("No data");
        doShowError("No data");
        return;
    }

    if (status.value !== "success") {
        console.log("Error fetching data");
        doShowError("Error fetching data");
        return;
    }

    const response: ExcuseObject = data.value;

    if (response.status !== 200) {
        console.log(response.message);
        doShowError("Error fetching data");
        return;
    }

    excuse.value = response.data;

    // console.log(response);
    // return response;
};
fetchExcuse(category);

const doShowError = (message: string) => {
    showError({
        statusCode: 404,
        statusMessage: message,
    });
};

let url = ref("");

if (category === "work") {
    url.value = "/_nuxt/assets/work_egg.png";
}

if (category === "school") {
    url.value = "/_nuxt/assets/school_egg.png";
}

if (category === "social") {
    url.value = "/_nuxt/assets/social_egg.png";
}
</script>
