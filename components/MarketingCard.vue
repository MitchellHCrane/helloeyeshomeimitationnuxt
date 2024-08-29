<template>
  <div class="basis-full laptop:basis-1/3 tablet:flex laptop:block relative">
    <div class="relative basis-1/2">
      <a :href="cardLink" class="">
        <div
          :class="[
            'hidden tablet:block laptop:hidden tablet:h-full pt-[100%] tablet:pt-0 bg-cover bg-center bg-no-repeat bg-gray-88',
            cardClass,
          ]"
        ></div>
        <span class="sr-only">{{ srText }}</span>
        <div
          :class="[
            'tablet:h-full laptop:h-auto pt-[100%] tablet:pt-0 laptop:pt-[100%] bg-cover bg-center bg-no-repeat bg-gray-88 tablet:hidden laptop:block',
            cardClass,
          ]"
        ></div>
      </a>
    </div>
    <div
      class="px-5 tablet:pb-10 laptop:pb-0 desktop:px-20 text-center mt-5 tablet:mt-0 laptop:mt-7.5 order-first basis-1/2 tablet:bg-white laptop:bg-black tablet:flex tablet:items-center laptop:block"
    >
      <div>
        <a :href="cardLink" class="">
          <div
            class="absolute tablet:static laptop:absolute top-0 left-0 w-full py-10 tablet:pt-10 tablet:pb-1.5 laptop:py-10 desktop:py-15 text-center"
          >
            <div class="displayFour">{{ titleLine1 }}</div>
            <div class="displaySix">{{ titleLine2 }}</div>
          </div>
        </a>
        <div class="text-white tablet:text-black laptop:text-white">
          <div class="text-lg">
            <p>
              <span>{{ description }}</span>
            </p>
          </div>
          <div class="hidden tablet:flex laptop:hidden">
            <a class="btn-black mx-auto mt-[45px]" :href="buttonLink"
              ><span>{{ buttonText }}</span></a
            >
          </div>
          <div class="flex tablet:hidden laptop:flex">
            <a
              :href="buttonLink"
              class="laptop:mt-[1.25rem] btn-outline-white mx-auto mt-5"
            >
              <span>{{ buttonText }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardLink: {
    type: String,
    default: "#",
  },
  srText: {
    type: String,
    default: "Browse Frames",
  },
  titleLine1: {
    type: String,
    default: "Find your style in",
  },
  titleLine2: {
    type: String,
    default: "Glasses",
  },
  description: {
    type: String,
    default:
      "Every frame includes free prescription lenses. Styles start at just $49!",
  },
  buttonLink: {
    type: String,
    default: "/eyeglasses",
  },
  buttonText: {
    type: String,
    default: "Browse Frames",
  },
  cardClass: {
    type: String,
    default: "bg-accent",
  },
});
</script>
