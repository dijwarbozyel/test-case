import { defineStore } from 'pinia'
import type { Show } from '~/types/show'

export const useShowsStore = defineStore('shows', () => {
  const config = useRuntimeConfig()

  const shows = ref<Show[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  
  async function fetchShows() {
    loading.value = true
    try {
      const data = await $fetch(`${config.public.apiBase}shows`)
      shows.value = data as Show[]
    } catch (e) {
      error.value = 'There was an error fetching the shows'
    } finally {
      loading.value = false
    }
  }
  
  async function searchShows(query: string) {
    loading.value = true
    try {
      const data = await $fetch(`${config.public.apiBase}search/shows`, {
        params: {
          q: query
        }
      }) as any[]
      shows.value = data.map((item: any) => item.show)
    } catch (e) {
      error.value = 'There was an error searching the shows'
    } finally {
      loading.value = false
    }
  }
  
  return {
    shows,
    loading,
    error,
    fetchShows,
    searchShows
  }
})