<template>
  <div class="six-doc">
    <doc-header />
    <doc-nav />
    <doc-main>
      <slot />
    </doc-main>
    <doc-simulator />
  </div>
</template>
<script>
import DocHeader from "./Header.vue";
import DocNav from "./Nav.vue";
import DocMain from "./Main.vue";
import DocSimulator from "./Simulator.vue";
export default {
  components: {
    DocHeader,
    DocNav,
    DocMain,
    DocSimulator,
  },
};
</script>
