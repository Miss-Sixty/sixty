<template>
  <div :class="['six-doc-simulator', { 'six-doc-simulator-fixed': isFixed }]">
    <iframe :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: "six-doc-simulator",

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
      src: `/mobile.html${location.hash}`,
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + "px",
      };
    },
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="scss">
@import "../../common/style/var";

.six-doc-simulator {
  position: absolute;
  top: $six-doc-padding + $header-height;
  right: $six-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: $simulator-width;
  min-width: $simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: $border-radius;
  box-shadow: $border-shadow;

  &-fixed {
    position: fixed;
    top: $six-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
