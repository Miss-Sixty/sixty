<template>
  <header class="doc-header">
    <h1 class="doc-header__logo">
      <img :src="config.logo" />
      <span>{{ config.title }}</span>
    </h1>

    <ul class="doc-header__nav">
      <li
        class="doc-header__nav-item"
        v-for="(item, index) in config.links"
        :key="index"
      >
        <a target="_blank" :href="item.url">
          <img :src="item.logo" />
        </a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "doc-header",
  data() {
    return {
      config: {
        logo: "https://s1.ax1x.com/2020/05/21/YqDNpq.png",
        title: "Sixty",
        links: [
          {
            logo: require("../../common/imgs/github.svg"),
            url: "https://github.com/Miss-Sixty/sixty",
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../common/style/var";
.doc-header {
  height: $header-height;
  background-color: $header-bg-color;
  line-height: $header-height;
  font-size: 0;
  color: #fff;
  display: flex;
  padding: 0 30px;
  &__logo {
    > * {
      display: inline-block;
      vertical-align: middle;
    }
    img {
      width: 24px;
      margin-right: 10px;
    }
    span {
      font-size: 22px;
    }
  }
  &__nav {
    text-align: right;
    flex: 1;
    &-item {
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
      img {
        width: 26px;
        height: 26px;
        display: block;
        transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
