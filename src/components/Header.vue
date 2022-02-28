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
