<template>
  <section class="six-doc-demo-section" :class="demoName">
    <slot />
  </section>
</template>

<script>
import { decamelize } from "../../common";

export default {
  name: "demo-section",

  computed: {
    demoName() {
      const { meta } = this.$route || {};
      if (meta && meta.name) {
        return `demo-${decamelize(meta.name)}`;
      }

      return "";
    }
  }
};
</script>

<style lang="scss">
.six-doc-demo-section {
  background-color: #fff;
  padding: 0 16px 20px;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
}
</style>
