<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { AdminList } from '../modals/index'

const props = defineProps<{
  isView: boolean
  selectItem: AdminList | null
}>()

const isEdit = ref(false)
function toggleEdit() {
  isEdit.value = !isEdit.value
}

watch(
  () => props.isView,
  () => {
    if (props.isView) {
      isEdit.value = false
    }
  }
)
</script>

<template>
  <div
    class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black-0.2"
    v-show="isView"
    @click="$emit('toggleView', null)"
  >
    <div class="max-w-120 w-11/12 bg-white p-8" @click.stop>
      <div class="flex flex-col gap-6 sm:flex-row">
        <div class="w-full sm:w-1/3">
          <img src="@/assets/images/user1.jpeg" alt="" class="h-full w-full object-cover" />
        </div>
        <div class="w-full flex-1 sm:w-2/3">
          <div class="flex justify-between">
            <p>#{{ props.selectItem?.id }}</p>
            <VIcon
              icon="ic:baseline-close"
              class="h-6 w-6 cursor-pointer"
              @click="$emit('toggleView', null)"
            />
          </div>
          <p>Admin</p>
          <h3 class="mb-2 text-2xl font-bold">{{ props.selectItem?.name }}</h3>
          <p class="mb-5 text-sm text-gray2">{{ props.selectItem?.email }}</p>
          <div class="flex items-center justify-between">
            <span
              class="rounded-sm bg-gray1 px-2 py-1 text-sm text-green1"
              v-if="props.selectItem?.verified"
              >Verified</span
            >
            <span class="text-red1 rounded-sm bg-gray1 px-2 py-1 text-sm" v-else>Unverified</span>
            <button type="button" @click="toggleEdit">
              <VIcon icon="lsicon:down-filled" class="text-2xl text-green1" />
            </button>
          </div>
        </div>
      </div>
      <div class="mt-9" v-show="isEdit">
        <div class="ml-auto flex w-full justify-center gap-4 sm:w-2/3 sm:pl-6">
          <button type="button" class="border-red1 text-red1 rounded-sm border px-8 py-2 font-bold">
            Deactivate
          </button>
          <button type="button" class="rounded-sm bg-green1 px-8 py-2 font-bold text-white">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
