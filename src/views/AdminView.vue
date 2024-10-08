<script setup lang="ts">
import { adminList } from '@/staticData/data'
import { ref } from 'vue'
import ModalView from '@/components/ModalView.vue'
import ModalAdd from '@/components/ModalAdd.vue'
import ModalEdit from '@/components/ModalEdit.vue'

const isTable = ref(-1)
function toggleTable(num: number) {
  if (isTable.value === num) {
    isTable.value = -1
  } else {
    isTable.value = num
  }
}

const isView = ref(false)
function toggleView() {
  isView.value = !isView.value
}

const isAdd = ref(false)
function toggleAdd() {
  isAdd.value = !isAdd.value
}

const isEdit = ref(false)
function toggleEdit() {
  isEdit.value = !isEdit.value
}
</script>

<template>
  <div>
    <div class="mb-10 flex items-center justify-between">
      <div class="flex gap-12">
        <h2 class="text-2xl font-bold">Admin</h2>
        <button type="button" class="flex items-center gap-2" @click="toggleAdd">
          <VIcon icon="ic:sharp-plus" class="text-2xl text-green1" />
          <span class="font-bold">Add New Admin</span>
        </button>
      </div>
      <div class="flex items-center gap-6">
        <VIcon icon="ic:baseline-search" class="text-2xl" />
        <VIcon icon="heroicons:bell-alert-solid" class="text-2xl" />
      </div>
    </div>
    <table class="mb-15 hidden w-full md:table">
      <thead>
        <tr class="text-left">
          <th class="border-b border-black pb-1">ID</th>
          <th class="border-b border-black pb-1">Name</th>
          <th class="border-b border-black pb-1">Email</th>
          <th class="border-b border-black pb-1">activated</th>
          <th class="border-b border-black pb-1">Verified</th>
          <th class="border-b border-black pb-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of adminList" :key="item.name">
          <td class="border-b border-gray3 py-4">#{{ index + 1 }}</td>
          <td class="border-b border-gray3 py-4">{{ item.name }}</td>
          <td class="border-b border-gray3 py-4">{{ item.email }}</td>
          <td class="border-b border-gray3 py-4">{{ item.verified ? 'Yes' : 'No' }}</td>
          <td class="border-b border-gray3 py-4">{{ item.activated ? 'Yes' : 'No' }}</td>
          <td class="w-20 border-b border-gray3 py-4">
            <div class="flex items-center gap-6">
              <VIcon icon="mdi:eye" class="cursor-pointer text-2xl" @click="toggleView" />
              <VIcon icon="ic:baseline-edit" class="cursor-pointer text-2xl" @click="toggleEdit" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mb-15 block w-full md:hidden">
      <div class="flex">
        <div class="w-10 border-b border-black pb-1 font-bold sm:w-15">ID</div>
        <div class="w-full flex-1 border-b border-black pb-1 font-bold">Name</div>
        <div class="w-20 border-b border-black pb-1 sm:w-30"></div>
      </div>
      <ul>
        <li v-for="(item, index) in adminList" :key="item.name">
          <div class="flex">
            <div class="w-10 border-b border-gray3 py-4 sm:w-15">#{{ index + 1 }}</div>
            <div class="w-full flex-1 border-b border-gray3 py-4">{{ item.name }}</div>
            <div class="w-20 border-b border-gray3 py-4 sm:w-30">
              <div class="flex items-center gap-2 sm:gap-6">
                <VIcon icon="mdi:eye" class="text-2xl" @click="toggleView" />
                <VIcon icon="ic:baseline-edit" class="text-2xl" @click="toggleEdit" />
                <VIcon icon="ic:sharp-plus" class="text-2xl" @click="toggleTable(index)" />
              </div>
            </div>
          </div>
          <div class="border-b border-gray3 py-2" :class="isTable === index ? 'block' : 'hidden'">
            <div class="mb-2 flex last:mb-0">
              <p class="w-25 font-bold">Email:</p>
              <span>{{ item.email }}</span>
            </div>
            <div class="mb-2 flex last:mb-0">
              <p class="w-25 font-bold">Verified:</p>
              <span>{{ item.verified ? 'Yes' : 'No' }}</span>
            </div>
            <div class="mb-2 flex last:mb-0">
              <p class="w-25 font-bold">Activated:</p>
              <span>{{ item.activated ? 'Yes' : 'No' }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-end">
      <ul class="flex rounded-sm border border-green1">
        <li class="border-r border-green1 last:border-r-0">
          <a href="#" class="flex h-8 w-8 items-center justify-center">
            <VIcon icon="lsicon:left-filled" class="text-2xl text-green1" />
          </a>
        </li>
        <li class="border-r border-green1 last:border-r-0">
          <a
            href="#"
            class="flex h-8 w-8 items-center justify-center text-green1 hover:bg-green1 hover:text-white"
            >1</a
          >
        </li>
        <li class="border-r border-green1 last:border-r-0">
          <a
            href="#"
            class="flex h-8 w-8 items-center justify-center text-green1 hover:bg-green1 hover:text-white"
            >2</a
          >
        </li>
        <li class="border-r border-green1 last:border-r-0">
          <a
            href="#"
            class="flex h-8 w-8 items-center justify-center text-green1 hover:bg-green1 hover:text-white"
            >3</a
          >
        </li>
        <li class="border-r border-green1 last:border-r-0">
          <a href="#" class="flex h-8 w-8 items-center justify-center">
            <VIcon icon="lsicon:right-filled" class="text-2xl text-green1" />
          </a>
        </li>
      </ul>
    </div>
    <ModalView :is-view="isView" @toggle-view="toggleView" />
    <ModalAdd :is-add="isAdd" @toggle-add="toggleAdd" />
    <ModalEdit :is-edit="isEdit" @toggle-edit="toggleEdit" />
  </div>
</template>
