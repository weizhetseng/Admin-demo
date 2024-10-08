<script setup lang="ts"></script>

<template>
  <div>
    <div class="mb-10 flex items-center justify-between">
      <div class="flex gap-12">
        <h2 class="text-2xl font-bold">Assignment</h2>
        <select
          name=""
          id=""
          class="relative appearance-none bg-[url('@/assets/images/down.svg')] bg-[size:24px] bg-right bg-no-repeat pr-6 font-bold"
        >
          <option value="">All Courses</option>
        </select>
      </div>
      <div class="flex items-center gap-6">
        <VIcon icon="ic:baseline-search" class="text-2xl" />
        <VIcon icon="heroicons:bell-alert-solid" class="text-2xl" />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <select
        name=""
        id=""
        class="relative mb-1.5 appearance-none bg-[url('@/assets/images/down.svg')] bg-[size:24px] bg-[right] bg-no-repeat pr-8 font-bold"
      >
        <option value="">All(4)</option>
      </select>
      <p class="text-gray2">2 comments</p>
    </div>
    <div class="flex flex-col gap-4 xl:flex-row">
      <div class="w-auto xl:w-80">
        <ul class="rounded-sm border border-gray3">
          <li class="border-b border-gray3 last:border-b-0">
            <a href="#" class="flex flex-col p-3 hover:bg-gray1">
              <div class="mb-1 flex items-center justify-between">
                <p class="text-xs">Chapter Assignment 2</p>
                <p class="text-xs">4 hrs ago</p>
              </div>
              <div class="flex items-center justify-between">
                <h4 class="text-blod">Please check this file…</h4>
                <p class="text-xs text-gray2">Emily Wang</p>
              </div>
            </a>
          </li>
          <li class="border-b border-gray3 last:border-b-0">
            <a href="#" class="flex flex-col p-3 hover:bg-gray1">
              <div class="mb-1 flex items-center justify-between">
                <p class="text-xs">Chapter Assignment 2</p>
                <p class="text-xs">12 hrs ago</p>
              </div>
              <div class="flex items-center justify-between">
                <h4 class="text-blod">My Homework</h4>
                <p class="text-xs text-gray2">David Xu</p>
              </div>
            </a>
          </li>
          <li class="border-b border-gray3 last:border-b-0">
            <a href="#" class="flex flex-col p-3 hover:bg-gray1">
              <div class="mb-1 flex items-center justify-between">
                <p class="text-xs">Final Assignment</p>
                <p class="text-xs">18 hrs ago</p>
              </div>
              <div class="flex items-center justify-between">
                <h4 class="text-blod">Have a problem with this…</h4>
                <p class="text-xs text-gray2">Tony Wei</p>
              </div>
            </a>
          </li>
          <li class="border-b border-gray3 last:border-b-0">
            <a href="#" class="flex flex-col p-3 hover:bg-gray1">
              <div class="mb-1 flex items-center justify-between">
                <p class="text-xs">Final Assignment</p>
                <p class="text-xs">19 hrs ago</p>
              </div>
              <div class="flex items-center justify-between">
                <h4 class="text-blod">Did I do it right?</h4>
                <p class="text-xs text-gray2">Christina Lin</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-auto xl:w-[calc(100%-320px)]">
        <div class="mb-4 rounded-sm border border-gray3">
          <div class="flex items-center justify-between gap-5 border-b border-gray3 bg-gray1 p-3">
            <div>
              <p class="text-xs">Chapter Assignment 2 / HTML&CSS</p>
              <h3 class="font-bold">Please check this file for me, thanks!</h3>
            </div>
            <VIcon icon="ci:more-vertical" class="text-2xl" />
          </div>
          <div class="p-4">
            <div>
              <div class="mb-4 flex items-center gap-2">
                <img
                  src="@/assets/images/user2.jpeg"
                  alt=""
                  class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <h4 class="font-bold">Emily Wang</h4>
                  <span class="text-xs text-gray2">10:38 AM (4 hours ago)</span>
                </div>
              </div>
              <div class="mb-4 ml-12 border-b border-gray3 pb-4">
                <p class="mb-4">
                  Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                  question: Why in the following code the height of the
                  <code class="rounded-sm bg-gray1 p-1 text-green1">div</code> is bigger than the
                  height of the <code class="rounded-sm bg-gray1 p-1 text-green1">img</code> ? There
                  is a gap below the image, but it doesn’t seems to be a padding/margin. <br />What
                  is the gap or extra space below image?
                </p>
                <a
                  href=""
                  download="HW-2-David.zip"
                  class="inline-flex items-center gap-2 rounded-sm border border-gray3 bg-gray1 px-3 py-2 font-bold"
                >
                  <VIcon icon="mdi:paperclip" class="text-2xl" />
                  HW-2-David.zip
                </a>
              </div>
            </div>

            <div>
              <div class="mb-4 flex items-center justify-between gap-5">
                <div class="flex items-center gap-2">
                  <img
                    src="@/assets/images/user3.jpeg"
                    alt=""
                    class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h4 class="font-bold">Andy Chen (You)</h4>
                    <span class="text-xs text-gray2">13:24 AM (1 hours ago)</span>
                  </div>
                </div>
                <div class="flex items-center gap-6">
                  <VIcon icon="mdi:star-outline" class="text-2xl" />
                  <VIcon icon="ic:baseline-edit" class="text-2xl" />
                </div>
              </div>
              <div class="mb-4 ml-12 border-b border-gray3 pb-4">
                <p class="mb-4">
                  Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                  question: Why in the following code the height of the
                  <code class="rounded-sm bg-gray1 p-1 text-green1">div</code> is bigger than the
                  height of the <code class="rounded-sm bg-gray1 p-1 text-green1">img</code> ? There
                  is a gap below the image, but it doesn’t seems to be a padding/margin. <br />What
                  is the gap or extra space below image?
                </p>
                <a
                  href=""
                  download="HW-2-David.zip"
                  class="inline-flex items-center gap-2 rounded-sm border border-gray3 bg-gray1 px-3 py-2 font-bold"
                >
                  <VIcon icon="mdi:paperclip" class="text-2xl" />
                  HW-2-David.zip
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex items-center gap-6">
            <VIcon icon="lsicon:left-filled" class="text-2xl" />
            <VIcon icon="lsicon:right-filled" class="text-2xl" />
          </div>
          <div class="flex items-center gap-4">
            <button
              type="button"
              class="rounded-sm border border-green1 px-8 py-2 font-bold text-green1"
            >
              Mark as read
            </button>
            <button type="button" class="rounded-sm bg-green1 px-8 py-2 font-bold text-white">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
