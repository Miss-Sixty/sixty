<template>
  <nav class="doc-nav" :style="style">
    <div v-for="(group, index) in nav" class="doc-nav__group" :key="index">
      <div class="doc-nav__title">{{ group.title }}</div>
      <template v-if="group.items">
        <div
          v-for="(item, groupIndex) in group.items"
          :key="groupIndex"
          class="doc-nav__item"
        >
          <router-link active-class="active" :to="item.path">
            {{ item.title }}
          </router-link>
        </div>
      </template>
    </div>
  </nav>
</template>

<script>
import SixtyConfig from "../../sixty.config";
export default {
  name: "doc-nav",
  data() {
    return {
      top: 60,
      bottom: 0,
      nav: SixtyConfig.site.nav,
    };
  },

  computed: {
    style() {
      return {
        top: this.top + "px",
        bottom: this.bottom + "px",
      };
    },
  },

  created() {
    window.addEventListener("scroll", () => {
      this.top = Math.max(0, 60 - window.pageYOffset);
    });
  },
};
</script>

<style lang="scss">
@import "../../common/style/var";

.doc-nav {
  position: fixed;
  left: 0;
  //   z-index: 1;
  min-width: $nav-width;
  max-width: $nav-width;
  padding: 24px 0 72px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: $nav-border-shadow;

  &__group {
    margin-bottom: 16px;
  }
  &__title {
    padding: 8px 0 8px 30px;
    color: #455a64;
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
  }

  &__item {
    > a {
      display: block;
      padding: 8px 0 8px 30px;
      color: #455a64;
      line-height: 28px;
      transition: color 0.2s;
      font-size: 13px;
      &:hover,
      &.active {
        color: $green;
      }
      &.active {
        -webkit-font-smoothing: auto;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }
}
</style>
