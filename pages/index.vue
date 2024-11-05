<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">TV Shows</h1>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search shows..."
              class="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              @input="handleSearch"
            />
            <div v-if="store.loading" class="absolute right-3 top-2.5">
              <Icon
                name="uil:spinner"
                class="animate-spin h-5 w-5 text-blue-500"
              />
            </div>
            <div v-else class="absolute right-3 top-2.5 text-gray-400">
              <Icon name="uil:search" class="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex space-x-4 mb-6">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'flex items-center px-4 py-2 rounded-lg',
            selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50',
          ]"
        >
          <Icon :name="category.icon" class="mr-2 w-5 h-5" />
          {{ category.name }}
        </button>
      </div>
      <div v-if="store.loading" class="flex justify-center py-12">
        <Icon name="uil:spinner" class="animate-spin h-8 w-8" />
      </div>

      <div v-else-if="store.error" class="text-center text-red-500 py-12">
        {{ store.error }}
      </div>

      <div
        v-else
        class="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] auto-rows-auto gap-6"
      >
        <ShowCard v-for="show in filteredShows" :key="show.id" :show="show" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import debounce from "lodash.debounce";

const store = useShowsStore();
const searchQuery = ref("");
const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "All Shows", icon: "uil:tv-retro" },
  { id: "drama", name: "Drama", icon: "uil:film" },
  { id: "comedy", name: "Comedy", icon: "uil:smile" },
  { id: "science-fiction", name: "Science-Fiction", icon: "uil:rocket" },
  { id: "thriller", name: "Thriller", icon: "uil:thunderstorm" },
  { id: "action", name: "Action", icon: "uil:fire" },
];

const filteredShows = computed(() => {
  if (selectedCategory.value === "all") {
    return store.shows;
  }
  return store.shows.filter((show) =>
    show.genres?.some((genre) => genre.toLowerCase() === selectedCategory.value)
  );
});

const handleSearch = debounce((event: Event) => {
  const query = (event.target as HTMLInputElement).value;
  if (query.length >= 2) {
    store.searchShows(query);
  } else {
    store.fetchShows();
  }
}, 500);

onMounted(() => {
  store.fetchShows();
});
</script>
