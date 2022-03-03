<template>
  <!-- <Header></Header> -->
  <div class="px-0 py-6 pb-0 text-white">
    <h1 class="text-2xl font-bold mb-6 px-8">Browse all</h1>

    <!-- min-w-[180px] max-w-[248px] min-h-[180px] max-h-[248px] -->
    <div class="w-full flex flex-wrap gap-6 pl-8 justify-items-start">
      <a
        href="#"
        v-for="browseCategory in browseList"
        :key="browseCategory.categoryName"
        class="z-10"
        :class="randomColor()"
      >
        <h1 class="absolute left-0 p-4 text-xl font-bold">
          {{ browseCategory.categoryName }}
        </h1>
        <img
          :src="browseCategory.imgURL"
          alt=""
          class="w-[100px] absolute origin-bottom right-0 bottom-0 rotate-[25deg]"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { computed } from "@vue/runtime-core";
import Header from "../components/Header.vue";

const browseList = ref([
  {
    categoryName: "Podcasts",
    imgURL: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
  },
  {
    categoryName: "Made For You",
    imgURL: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
  },
  {
    categoryName: "Charts",
    imgURL:
      "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  },
  {
    categoryName: "New Releases",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    categoryName: "New Releases",
    imgURL: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
  },
  {
    categoryName: "Discover",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    categoryName: "Concerts",
    imgURL: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    categoryName: "RADAR",
    imgURL: "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
  },
  {
    categoryName: "Discover",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    categoryName: "Concerts",
    imgURL: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    categoryName: "RADAR",
    imgURL: "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
  },
]);

// const color = computed;

// const colors = ["red", "blue", "teal", "sky", "purple"];
const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-teal-500",
  "bg-sky-500",
  "bg-purple-500",
  "bg-orange-400",
  "bg-amber-300",
  "bg-slate-500",
  "bg-indigo-900",
];

function generateColorNum() {
  const oneToNine = Math.floor(Math.random() * 9 + 1);
  return oneToNine * 100;
}

function generateRandomColors() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// console.log(generateRandomColors());

// console.log(generateColorNum());

// const randomColor = computed(
//   () => `bg-${generateRandomColors()}-${generateColorNum()} rounded-lg overflow-hidden min-w-[300px] max-w-[300px] h-[300px] md:min-w-[248px] md:max-w-[248px] md:h-[248px] lg:min-w-[185px] lg:max-w-[185px] lg:h-[185px] lg:basis-2/12 flex z`
// );

function randomColor() {
  const color = `${generateRandomColors()}`;
  return `${color} rounded-lg overflow-hidden min-w-[300px] max-w-[300px] h-[300px] md:min-w-[248px] md:max-w-[248px] md:h-[248px] lg:min-w-[185px] lg:max-w-[185px] lg:h-[185px] lg:basis-2/12 flex `;
}
// console.log(randomColor());

function convertColor() {
  console.log(test.value);
}

// test.value.classList.add(randomColor());

const cardColor = ref(randomColor());
// console.log(cardColor.value);
</script>

<style></style>
