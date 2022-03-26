<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import { ref } from "@vue/reactivity";
import SearchHeader from "./components/SearchHeader.vue";
import PlaylistCategory from "./components/PlaylistCategory.vue";
// import SpotifyIcon from "./components/icons/SpotifyLogo.vue";
// import HomeIcon from "./components/icons/HomeIcon.vue";

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
</script>

<template>
  <div class="flex h-auto">
    <Navbar></Navbar>

    <!-- main right side -->
    <main class="w-full bg-spotifyBG h-auto min-h-screen">
      <!-- <Header></Header> -->
      <RouterView></RouterView>
      <!-- <PlaylistCategory
        :categories="categories"
        :playlists="playlists"
      ></PlaylistCategory>
      <PlaylistCategory
        :categories="categories"
        :playlists="playlists"
      ></PlaylistCategory>
      <PlaylistCategory
        :categories="categories"
        :playlists="playlists"
      ></PlaylistCategory> -->
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
