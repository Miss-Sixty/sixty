<template>
  <div class="six-doc">
    <doc-header />
    <!-- <doc-nav :nav-config="config.nav" />
    <doc-container>
      <doc-content>
        <slot />
      </doc-content>
    </doc-container>
    <doc-simulator :src="simulator" /> -->
  </div>
</template>
<script>
import DocHeader from "./components/Header.vue";
export default {
  components: {
    DocHeader,
  },
};
</script>
