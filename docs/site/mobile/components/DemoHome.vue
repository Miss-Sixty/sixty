<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img :src="site.logo" />
      <span>{{ site.title }}</span>
    </h1>
    <h2 v-if="site.description" class="demo-home__desc">{{ site.description }}</h2>
    <template v-for="(group, index) in site.nav">
      <demo-home-nav :group="group" :key="index" />
    </template>
  </div>
</template>

<script>
import DemoHomeNav from "./DemoHomeNav.vue";
import { site } from "../../sixty.config";
export default {
  components: {
    DemoHomeNav
  },
  data() {
    return {
      site
    };
  }
};
</script>

<style lang="scss">
@import "../../common/style/var";

.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;

  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 32px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 32px;
    }

    span {
      margin-left: 16px;
      font-weight: 500;
    }
  }

  &__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}
</style>
