<template>
  <!--header for sign up and login-->
  <div
    class="w-full bg-black bg-opacity-[.95] flex items-center justify-between px-4 py-[14px] sticky top-0 z-10"
  >
    <!-- div for back & next button -->
    <div class="flex w-fit space-x-2">
      <button class="bg-black p-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button class="bg-black p-1 rounded-full opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div class="flex rounded-full overflow-hidden box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="bg-white w-8 p-1 flex-shrink-0"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          />
        </svg>
        <input
          type="text"
          placeholder="Artists, songs, or podcasts"
          class="outline-none text-xs p-2 min-w-[300px] w-full grow py-2 placeholder:text-gray-600 placeholder:font-medium placeholder:text-sm text-black font-semibold text-sm"
        />
      </div>
    </div>

    <!-- container for sign up & log in -->
    <div class="flex space-x-2 whitespace-nowrap">
      <button
        class="bg-inherit text-white cursor-default font-bold uppercase text-xs px-9 py-[10px] rounded-3xl tracking-[1.76px] hover:scale-105"
      >
        Sign Up
      </button>
      <button
        class="bg-white text-black font-bold uppercase text-xs px-9 py-[10px] rounded-3xl tracking-[1.76px] hover:scale-105"
      >
        Log In
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
