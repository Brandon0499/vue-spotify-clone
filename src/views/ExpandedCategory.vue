<template>
  <Header></Header>
  <div class="px-8 py-6 pb-0 text-white" v-for="i in 2" :key="i">
    <div
      class="flex justify-between w-full"
      v-for="category in parsed.subCategories"
      :key="category"
    >
      <div>
        <a href="#" class="capitalize text-2xl font-bold hover:underline">
          {{ category.title }}
        </a>
      </div>
      <a
        href="#"
        class="uppercase self-end text-xs font-semibold hover:underline tracking-[0.1em] text-gray-400"
        >See All</a
      >
    </div>
    <div class="min-h-[180px] max-h-[330px] 2xl:max-h-[280px] overflow-hidden">
      <div class="w-full grid grid-cols-12 grid-rows-1 gap-6 mt-2 gap-y-40">
        <a
          href="#"
          v-for="(playlist, index) in parsed.subCategories[0].playlists"
          :key="index"
          class="min-w-[180px] max-w-[247px] h-auto shrink p-4 flex flex-col bg-cardBG rounded-md hover:bg-cardHover ease-in duration-300 group text-left col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2 row-span-1 flex-nowrap"
        >
          <div
            class="shadow group-hover:shadow-black group-hover:shadow-lg ease-in duration-300 rounded-sm"
          >
            <img
              :src="playlist.playlistImg"
              alt=""
              class="object-cover w-full h-full rounded-md"
            />
            <button
              class="absolute w-1/4 bottom-0 right-[10px] opacity-0 group-hover:opacity-100 group-hover:bottom-3 ease-in duration-200 flex justify-end"
            >
              <div
                class="bg-spotifyGreen p-2 rounded-full shadow group-hover:shadow-xl group-hover:shadow-black ease-in duration-200 hover:cursor-default hover:scale-110 hover:transition-none flex shrink"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="w-6 object-cover"
                >
                  <polygon
                    points="21.57 12 5.98 3 5.98 21 21.57 12"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </div>
            </button>
          </div>

          <div class="mt-4">
            <h1 class="text-base font-bold">{{ playlist.name }}</h1>
            <h2
              class="h-8 text-sm leading-4 font-semibold text-grayText mt-1 text-ellipsis overflow-hidden"
            >
              {{ playlist.description }}
            </h2>
          </div>
        </a>
      </div>
    </div>
  </div>

  <h1 class="text-white">
    This is expanded category page {{ $route.params.id }}
  </h1>
  <!-- The current category object {{ parsed.subCategories }} -->
  {{ parsedPlaylistName }}
</template>

<script setup>
import Header from "../components/Header.vue";
import { useRoute } from "vue-router";
import { defineProps, ref } from "vue";
const route = useRoute();

// do this if we dont want to write "$route.params.id"
// const props = defineProps({
//   id: Number,
// });

const props = defineProps({
  currentCategory: {
    type: Object,
  },
});

// const parsed = ref(JSON.parse(props.currentCategory));
const parsed = JSON.parse(props.currentCategory);

const parsedPlaylistName = parsed.subCategories[0].playlists[2].name;

console.log(parsedPlaylistName);
</script>

<style></style>
