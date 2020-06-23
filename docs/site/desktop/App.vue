<template>
  <six-doc>
    <router-view />
  </six-doc>
</template>
<script>
import SixDoc from "./components/index.vue";
export default {
  components: { SixDoc }
};
</script>
<style lang="scss">
@import "../common/style/base";
@import "../common/style/highlight";

.six-doc-intro {
  padding-top: 20px;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
