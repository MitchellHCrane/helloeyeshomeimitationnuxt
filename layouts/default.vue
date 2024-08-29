<template>
  <div class="flex flex-col">
    <Navbar />
    <div class="flex-1">
      <slot />
    </div>
    <footer class="bg-black h-48"></footer>
  </div>
</template>

<script>
export default {};
</script>
