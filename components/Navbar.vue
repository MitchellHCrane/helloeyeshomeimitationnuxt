<template>
  <nav class="h-fit min-h-0 w-full z-10 fixed">
    <div class="bg-black h-[60px] w-full">
      <div
        class="max-w-[1920px] h-full mx-auto flex flex-1 justify-start items-center"
      >
        <!-- Menu Button for Mobile -->
        <button
          class="relative h-full flex flex-col justify-center mx-5 text-white hover:text-accent laptop:hidden"
        >
          <Bars3Icon class="size-6" />
        </button>

        <!-- Company Logo -->
        <img
          class="h-[26px] tablet:h-[36px] laptop:mx-[60px] hover:cursor-pointer w-fit mr-[60px]"
          alt="Your Company Here Logo"
          src="../assets//images//helloEyes.png"
        />

        <!-- Menu Items -->
        <div class="hidden laptop:flex flex-row">
          <button
            v-for="item in menuItems"
            :key="item.title"
            class="mr-[30px] text-white relative h-full heading-2 justify-center hover:text-accent"
          >
            {{ item.title }}
          </button>
        </div>

        <!-- User and Cart Icons -->
        <div
          class="flex ml-auto h-full space-x-[30px] mr-5 tablet:mr-10 laptop:mr-[60px] items-center"
        >
          <button
            class="h-full flex flex-col justify-center relative text-white hover:text-capri"
          >
            <UserIcon class="size-6 hover:text-accent" />
          </button>
          <button
            class="h-full flex flex-col justify-center relative text-white hover:text-capri hover:text-darkPrimary"
          >
            <ShoppingCartIcon class="size-6 hover:text-accent" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";

// Reactive reference for menu items
const menuItems = ref([
  { title: "Eyewear", href: "/" },
  { title: "Contact lenses", href: "/#" },
  { title: "Prescription tools", href: "/#" },
]);
</script>
