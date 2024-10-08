<script lang="ts" setup>
import type { AdminList } from '../modals/index'

defineProps<{
  isEdit: boolean
  selectItem: AdminList | null
}>()
</script>

<template>
  <div
    class="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-black-0.2 py-10"
    v-show="isEdit"
    @click="$emit('toggleEdit', null)"
  >
    <div class="max-w-120 mx-auto w-11/12 bg-white p-8" @click.stop>
      <div class="mb-8 flex justify-between">
        <h3 class="text-2xl font-bold">Edit Admin</h3>
        <VIcon
          icon="ic:baseline-close"
          class="h-6 w-6 cursor-pointer"
          @click="$emit('toggleEdit', null)"
        />
      </div>
      <form action="">
        <div class="border-b border-gray3 pb-6">
          <h4 class="mb-4 text-xl font-bold">Account</h4>
          <div class="mb-4 flex flex-col gap-1">
            <label for="" class="text-sm">Name</label>
            <input type="text" class="border border-black1 p-2" placeholder="Name" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="text-sm">Email</label>
            <input type="text" class="border border-black1 p-2" placeholder="Email" />
          </div>
        </div>
        <div class="border-b border-gray3 py-6">
          <h4 class="mb-4 text-xl font-bold">Verification</h4>
          <!-- <p class="mb-4 flex items-center gap-2 font-bold">
            <VIcon class="text-red1 text-2xl" icon="mingcute:alert-fill" />Unverified
          </p> -->
          <div class="mb-4 flex w-full items-center justify-between">
            <p class="flex items-center gap-2 font-bold">
              <VIcon icon="material-symbols:check-circle" class="text-2xl text-green1" />Verified
            </p>
            <span class="text-sm">2024/10/08</span>
          </div>
          <button type="button" class="block w-full border border-gray3 p-4 font-bold text-green1">
            Send Verification Mail
          </button>
        </div>
        <div class="border-b border-gray3 py-6">
          <h4 class="mb-4 text-xl font-bold">Access Level</h4>
          <select name="" id="" class="w-full border border-black1 p-4">
            <option value="">-Choose access level-</option>
          </select>
        </div>
        <div class="border-b border-gray3 py-6">
          <h4 class="mb-4 text-xl font-bold">Custom Access</h4>
          <div class="flex flex-col gap-4">
            <label for="" class="flex items-center gap-2">
              <input type="checkbox" class="h-4 w-4" />
              <span>Lecture</span>
            </label>
            <label for="" class="flex items-center gap-2">
              <input type="checkbox" class="h-4 w-4" />
              <span>Coupon</span>
            </label>
            <label for="" class="flex items-center gap-2">
              <input type="checkbox" class="h-4 w-4" />
              <span>Message</span>
            </label>
            <label for="" class="flex items-center gap-2">
              <input type="checkbox" class="h-4 w-4" />
              <span>Setting</span>
            </label>
            <label for="" class="flex items-center gap-2">
              <input type="checkbox" class="h-4 w-4" />
              <span>Task Menu</span>
            </label>
          </div>
        </div>
        <div class="mb-12 pt-6">
          <h4 class="mb-4 text-xl font-bold">Deactivate Account</h4>
          <p class="text-red1 mb-5 flex items-center gap-2 font-bold">
            <VIcon class="text-2xl" icon="mingcute:alert-fill" />This cannot be undone!
          </p>
          <button type="button" class="text-red1 border-red1 block w-full border p-4 font-bold">
            Deactivate This Account
          </button>
        </div>
        <div class="flex items-center justify-end gap-4">
          <button
            type="reset"
            class="rounded-sm border border-green1 px-8 py-2 font-bold text-green1"
          >
            Cancel
          </button>
          <button type="submit" class="rounded-sm bg-green1 px-8 py-2 font-bold text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
