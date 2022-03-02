<template>
  <div class="px-8 py-6 pb-0 text-white" v-for="i in 3" :key="i">
    <div
      class="flex justify-between w-full"
      v-for="category in categories"
      :key="category"
    >
      <div>
        <a href="#" class="capitalize text-2xl font-bold hover:underline">
          {{ category.title }}
        </a>
        <h1 class="self-end text-sm font-medium text-gray-400">
          {{ category.categoryDescription }}
        </h1>
      </div>
      <a
        href="#"
        class="uppercase self-end text-xs font-semibold hover:underline tracking-[0.1em] text-gray-400"
        >See All</a
      >
    </div>

    <!-- w-full border grid grid-flow-col gap-4 overflow-hidden -->
    <!-- w-full border grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 overflow-hidden grid-rows-1 -->
    <!-- cards -->
    <div
      class="h-auto min-h-[180px] max-h-[310px] 2xl:max-h-[280px] overflow-hidden"
    >
      <div class="w-full grid grid-cols-12 grid-rows-1 gap-6 mt-2 gap-y-40">
        <a
          href="#"
          v-for="(playlist, index) in playlists"
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
            <h1 class="text-base font-bold">{{ playlist.title }}</h1>
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
</template>

<script setup>
import { ref } from "vue";
const playlists = ref([
  {
    name: "Peaceful Piano",
    playlistImg:
      "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
    description: "Relax and indulge with beautiful piano pieces ",
  },
  {
    name: "lofi beats",
    playlistImg:
      "https://i.scdn.co/image/ab67706f00000002c8114f56f99e3a37159595f6",
    description:
      "Fly as a kite with beats to chill, relax, study, code, focus, and sleep... 🪁",
  },
  {
    name: "Jazz in the Background",
    playlistImg:
      "https://i.scdn.co/image/ab67706f00000002c7059110f5a17c6a5c353e2a",
    description: "Soft jazz for all your activities.",
  },
  {
    name: "Deep Focus",
    playlistImg:
      "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
    description: "Keep calm and focus with ambient and post-rock music.",
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
]);

const categories = ref([
  {
    title: "Focus",
    categoryDescription: "Music to help you concentrate.",
    playlists: [
      {
        name: "Peaceful Piano",
        playlistImg:
          "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
        description: "Relax and indulge with beautiful piano pieces ",
      },
      {
        name: "lofi beats",
        playlistImg:
          "https://i.scdn.co/image/ab67706f00000002c8114f56f99e3a37159595f6",
        description:
          "Fly as a kite with beats to chill, relax, study, code, focus, and sleep... 🪁",
      },
      {
        name: "Jazz in the Background",
        playlistImg:
          "https://i.scdn.co/image/ab67706f00000002c7059110f5a17c6a5c353e2a",
        description: "Soft jazz for all your activities.",
      },
      {
        name: "Deep Focus",
        playlistImg:
          "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
        description: "Keep calm and focus with ambient and post-rock music.",
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
]);
</script>

<style></style>
