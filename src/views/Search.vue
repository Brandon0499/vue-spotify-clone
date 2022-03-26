<template>
  <!-- <Header></Header> -->
  <SearchHeader></SearchHeader>
  <div class="px-0 py-6 pb-0 text-white">
    <h1 class="text-2xl font-bold mb-6 px-8">Browse all</h1>

    <!-- min-w-[180px] max-w-[248px] min-h-[180px] max-h-[248px] -->
    <div class="w-full flex flex-wrap gap-6 pl-8 justify-items-start">
      <div
        v-for="browseCategory in browseList"
        :key="browseCategory.id"
        :class="randomColor()"
      >
        <!-- params is a route parameter(key,value) -->
        <!-- the line below cannot be pases as props to router link because we need to pass it in the "param" property instead -->
        <!-- :currentCategory="getCurrentCategory(browseCategory.id)" -->
        <RouterLink
          :to="{
            name: 'ExpandedCategory',
            params: {
              id: browseCategory.id,
              currentCategory: getCurrentCategory(browseCategory.id),
            },
          }"
          class="w-full"
        >
          <h1 class="absolute left-0 p-4 text-xl font-bold">
            {{ browseCategory.categoryName }}
          </h1>
          <img
            :src="browseCategory.imgURL"
            alt=""
            class="w-[100px] absolute origin-bottom right-0 bottom-0 rotate-[25deg]"
          />
        </RouterLink>
      </div>

      {{ getCurrentCategory(5) }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { computed } from "@vue/runtime-core";
import Header from "../components/Header.vue";
import SearchHeader from "../components/SearchHeader.vue";
import { useRouter, RouterLink } from "vue-router";
const browseList = ref([
  {
    id: 1,
    categoryName: "Podcasts",
    imgURL: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
    subCategories: [
      {
        title: "Categories",
        subCategoryDescription: "Music to help you concentrate.",
        playlists: [
          {
            name: "Top podcasts",
            playlistImg:
              "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
            description: "Relax and indulge with beautiful piano pieces ",
          },
          {
            name: "Stories",
            playlistImg:
              "https://t.scdn.co/images/d951a2d590194722bbfffe2a99ab0e45.jpeg",
            description:
              "Fly as a kite with beats to chill, relax, study, code, focus, and sleep... 🪁",
          },
          {
            name: "True Crime",
            playlistImg:
              "https://t.scdn.co/images/ddc7cce63cdf49b5a632fb90872929e3.jpeg",
            description: "Soft jazz for all your activities.",
          },
          {
            name: "Deep Focus",
            playlistImg:
              "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
            description:
              "Keep calm and focus with ambient and post-rock music.",
          },
          {
            name: "Jazz Vibes",
            playlistImg:
              "https://i.scdn.co/image/ab67706f000000023462a4dbc851cd106d16491c",
            description: "The original chill instrumental beats playlist.",
          },
          {
            name: "Instrumental Study",
            playlistImg:
              "https://i.scdn.co/image/ab67706f000000025ec8c003898b36c6f73dfac7",
            description: "A soft musical backdrop for your studies.",
          },
          {
            name: "Peaceful Guitar",
            playlistImg:
              "https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2",
            description: "Unwind to these calm classical guitar pieces. ",
          },
          {
            name: "Piano in the Background",
            playlistImg:
              "https://i.scdn.co/image/ab67706f00000002a461b85872ea87bb0de00128",
            description: "A calm piano soundtrack to all activities.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    categoryName: "Made For You",
    imgURL: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
  },
  {
    id: 3,
    categoryName: "Charts",
    imgURL:
      "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  },
  {
    id: 4,
    categoryName: "New Releases",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    id: 5,
    categoryName: "New Releases",
    imgURL: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
  },
  {
    id: 6,
    categoryName: "Discover",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    id: 7,
    categoryName: "Concerts",
    imgURL: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    id: 8,
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    id: 9,
    categoryName: "RADAR",
    imgURL: "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
  },
  {
    id: 10,
    categoryName: "Discover",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    id: 11,
    categoryName: "Concerts",
    imgURL: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    id: 12,
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    id: 13,
    categoryName: "RADAR",
    imgURL: "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
  },
  {
    id: 14,
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    id: 15,
    categoryName: "RADAR",
    imgURL: "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
  },
  {
    id: 16,
    categoryName: "Discover",
    imgURL: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    id: 17,
    categoryName: "Concerts",
    imgURL: "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
  },
  {
    id: 18,
    categoryName: "At Home",
    imgURL: "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
  },
  {
    id: 19,
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
const cardColor = ref(randomColor());
// console.log(cardColor.value);
// console.log($router);
const router = useRouter();
function goToExpandedCategory(categoryId) {
  router.push(`/expandedCategory/${categoryId}`);
}
// console.log(router);

// .find() returns an object
//.filter() returns an array
let currentCategory = ref(null);
function getCurrentCategory(id) {
  currentCategory = browseList.value.find((category) => category.id == id);
  return JSON.stringify(currentCategory);
}
</script>

<style></style>
