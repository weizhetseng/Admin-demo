<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import SideList from '@/components/SideList.vue'
const isNav = ref(false)

function toggleNav() {
  isNav.value = !isNav.value
}

const mainStatus = computed(() => {
  if (isNav.value) return 'w-full lg:w-full'
  else return 'w-full lg:w-[calc(100%-300px)]'
})
</script>

<template>
  <SideList :is-nav="isNav" @toggle-nav="toggleNav" />
  <main class="ml-auto p-8 duration-300" :class="mainStatus">
    <RouterView :is-nav="isNav" />
  </main>
</template>
