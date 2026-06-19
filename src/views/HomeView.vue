<template>
  <main class="home">
    <HeroSection />
    <FeaturesBento />
    <WorkflowSection />
    <TechSpecsSection />
    
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeaturesBento from '@/components/FeaturesBento.vue'
import WorkflowSection from '@/components/WorkflowSection.vue'
import TechSpecsSection from '@/components/TechSpecsSection.vue'

</script>

<style scoped>
.home {
  display: block;
}
</style>
