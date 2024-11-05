<template>
  <NuxtLink
    :to="`/show/${show.id}`"
    class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow w-[210px] cursor-pointer"
  >
    <div class="relative aspect-video">
      <img
        :src="show.image?.medium || '/assets/images/placeholder.png'"
        :alt="show.name"
        class="w-full h-auto object-cover"
      />
      <div
        class="absolute top-2 right-2 flex items-center bg-black bg-opacity-75 rounded-full px-2 py-1"
      >
        <Icon name="uil:star" class="text-yellow-400 w-4 h-4" />
        <span class="text-white text-sm ml-1">{{
          show.rating?.average || "N/A"
        }}</span>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-1">{{ show.name }}</h3>
      <p class="text-gray-600 text-sm mb-2">{{ show.genres?.join(" • ") }}</p>
      <p class="text-gray-500 text-sm line-clamp-2" v-html="show.summary"></p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Show } from "~/types/show";

defineProps<{
  show: Show;
}>();
</script>
