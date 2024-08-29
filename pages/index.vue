<template>
  <div
    class="mt-[60px] relative bg-gray-55 min-h-[590px] tablet:min-h-[690px] desktop:min-h-[890px]"
  >
    <img
      src="../assets/images/Home-hero-desk.avif"
      class="object-cover hidden desktop:block absolute top-0 left-0 w-full h-full"
    />
    <img
      src="../assets/images/Home-hero-tablet.avif"
      class="object-cover hidden tablet:block desktop:hidden absolute top-0 left-0 w-full h-full"
    />
    <img
      src="../assets/images/Home-hero-mobile.avif"
      class="object-cover tablet:hidden absolute top-0 left-0 w-full h-full"
    />
    <div
      class="container mx-auto px-5 tablet:px-10 laptop:px-15 pb-30 pt-10 laptop:pt-21 desktop:py-[150px]"
    >
      <div
        class="relative max-w-[375px] tablet:max-w-[500px] laptop:max-w-[550px] desktop:max-w-[775px]"
      >
        <h1 class="text-white">
          <div
            class="text-[48px] uppercase font-bold leading-[52px] laptop:text-[80px] laptop:leading-[80px]"
          >
            Vision Care From Home.
          </div>
          <div
            class="mt-2.5 tablet:mt-5 tablet:max-w-[400px] laptop:max-w-[500px] desktop:max-w-[600px] text-base laptop:text-2xl font-normal"
          >
            Shop the latest frames, try on your favorites, restock contacts, and
            even take our free vision assessment—all from home.
          </div>
        </h1>
        <div class="mt-[1.875rem] flex flex-wrap gap-5">
          <a href="#" class="btn-white">Start My Assesment</a>
          <a href="#" class="btn-outline-white">Shop Glasses</a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black pb-15 laptop:pb-15 desktop:pb-[100px]">
    <div class="container mx-auto px-5 tablet:px-10 laptop:px-15">
      <div
        class="tablet:flex laptop:gap-[1.875rem] tablet:flex-wrap laptop:flex-nowrap laptop:space-x-7.5 space-y-10 laptop:space-y-0 relative top-[-100px] mb-[-100px] desktop:top-[-150px] desktop:mb-[-150px] top-[-50px] mb-[-50px] desktop:top-[-100px] desktop:mb-[-100px]"
      >
        <MarketingCard
          v-for="(card, index) in cardsData"
          :key="index"
          :cardLink="card.cardLink"
          :srText="card.srText"
          :titleLine1="card.titleLine1"
          :titleLine2="card.titleLine2"
          :description="card.description"
          :buttonLink="card.buttonLink"
          :buttonText="card.buttonText"
          :cardClass="index % 2 === 0 ? 'bg-accent' : 'bg-evenColor'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Array of card data
const cardsData = ref([
  {
    cardLink: "#",
    srText: "Browse Frames",
    titleLine1: "Find your style in",
    titleLine2: "Glasses",
    description:
      "Every frame includes free prescription lenses. Styles start at just $49!",
    buttonLink: "/eyeglasses",
    buttonText: "Browse Frames",
  },
  {
    cardLink: "#",
    srText: "Start My Assesment",
    titleLine1: "Start your free",
    titleLine2: "Vision Assessment",
    description:
      "This guided experience includes a short questionnaire and a vision check.",
    buttonLink: "#",
    buttonText: "Start My Assesment",
  },
  {
    cardLink: "#",
    srText: "Browse Accessories",
    titleLine1: "Restock your",
    titleLine2: "Contacts",
    description:
      "We carry all the brands at the best prices. Stock up now and save big.",
    buttonLink: "#",
    buttonText: "Find My Contacts",
  },
]);
</script>
