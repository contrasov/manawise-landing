<script setup lang="ts">
import SectionAbout from './components/SectionAbout.vue';
import SectionBanner from './components/SectionBanner.vue'
import SectionPodcast from './components/SectionPodcast.vue';
import SectionShop from './components/SectionShop.vue';
import SectionSquad from './components/SectionSquad.vue';
import SectionTimer from './components/SectionTimer.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
    <SectionBanner />
    <SectionTimer />
    <div class="sections">
      <SectionAbout />
      <SectionPodcast />
      <SectionSquad id="ml"/>
      <SectionShop />
    </div>
    <Footer/>
  </main>

</template>

<style scoped>
.sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 85px;
  padding: 70px 104px 70px 90px;
}

@media (max-width: 480px) {
    .sections {
      padding: 70px 12px 70px 12px;
    }
}

@media (min-width: 480px) and (max-width: 500px) {
    .section-normal {
        width: 457px; /* Ajuste a largura conforme necessário */
    }
}
</style>
