<script setup lang="ts">
import { onMounted, ref, computed, watchEffect, onUnmounted } from 'vue'
import { sideList } from '@/staticData/data'

const props = defineProps<{
  isNav: boolean
}>()

const emit = defineEmits(['toggleNav'])

const navStatus = computed(() => {
  if (props.isNav) return 'translate-x-0 lg:-translate-x-[300px]'
  else return '-translate-x-[300px] lg:translate-x-0'
})

const buttonStatus = computed(() => {
  if (props.isNav) return 'right'
  else return 'left'
})

const windowWidth = ref(0)

function toggleMibileNav() {
  if (windowWidth.value < 1024) {
    emit('toggleNav')
  }
}

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

watchEffect(() => {
  windowWidth.value = window.innerWidth
})
</script>

<template>
  <div
    class="fixed z-10 flex h-full w-[300px] flex-col bg-gray1 py-8 duration-300"
    :class="navStatus"
  >
    <button
      type="button"
      class="absolute right-0 top-1/2 h-15 translate-x-full rounded-r-lg bg-gray3"
      @click="emit('toggleNav')"
    >
      <VIcon :icon="`lsicon:${buttonStatus}-filled`" class="text-2xl" />
    </button>
    <RouterLink to="/" class="mb-8 block pl-8">
      <img src="@/assets/images/logo.svg" alt="" />
    </RouterLink>
    <ul class="mb-8">
      <li
        class="mb-6 last:mb-0"
        v-for="list in sideList"
        :key="list.icon"
        @click="toggleMibileNav()"
      >
        <RouterLink
          :to="list.link"
          class="flex items-center gap-4 border-l-4 pl-8 hover:border-green1 hover:text-green1"
        >
          <VIcon :icon="list.icon" class="text-2xl" />
          <span class="font-bold">{{ list.title }}</span>
        </RouterLink>
      </li>
    </ul>
    <div class="mt-auto flex items-center gap-4 pl-8">
      <img src="@/assets/images/user3.jpeg" alt="" class="h-10 w-10 rounded-full object-cover" />
      <div>
        <p class="font-bold">Andy Chen</p>
        <span class="text-sm text-gray2">andy0401@mail.com</span>
      </div>
    </div>
  </div>
</template>

<style>
a.router-link-exact-active {
  color: #198754;
  border-color: #198754;
}
</style>
