<template>
  <div class="six-doc-demo-block">
    <h2 class="six-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: "demo-block",

  props: {
    title: String
  }
};
</script>

<style lang="scss">
@import "../../common/style/var";

.six-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: $six-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &:first-of-type {
    .six-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
