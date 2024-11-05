<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-[700px] mx-auto px-4 py-8">
      <div v-if="show" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img
            :src="show.image?.original || '/placeholder.jpg'"
            :alt="show.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-3xl font-bold text-gray-900">{{ show.name }}</h1>
            <div class="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <Icon name="uil:star" class="text-yellow-400 w-5 h-5" />
              <span class="ml-1 font-semibold">{{
                show.rating?.average || "N/A"
              }}</span>
            </div>
          </div>
          <div class="flex items-center text-gray-600 mb-4">
            <span class="mr-4">{{ show.genres?.join(" • ") }}</span>
          </div>
          <div class="prose max-w-none" v-html="show.summary"></div>
        </div>
      </div>

      <div v-else-if="status === 'pending'" class="flex justify-center py-12">
        <Icon name="uil:spinner" class="animate-spin h-8 w-8" />
      </div>

      <div v-else class="text-center text-red-500 py-12">Page not found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '~/types/show';

const route = useRoute();
const config = useRuntimeConfig()
const { data: show, status } = await useFetch<Show>(
  `${config.public.apiBase}shows/${route.params.id}`
);
</script>
