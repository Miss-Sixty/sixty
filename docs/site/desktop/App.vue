<template>
  <div class="six-doc">
    <doc-header />
    <doc-nav />
    <!-- <doc-container>
      <doc-content>
        <slot />
      </doc-content>
    </doc-container>
    <doc-simulator :src="simulator" /> -->
    <doc-main />
  </div>
</template>
<script>
import { DocHeader, DocNav, DocMain } from "./components";
export default {
  components: {
    DocHeader,
    DocNav,
    DocMain,
  },
};
</script>
