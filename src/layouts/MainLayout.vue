<script setup lang="ts">
import HeaderContent from '@/components/NavbarContent.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
  <HeaderContent/>
  <main>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
