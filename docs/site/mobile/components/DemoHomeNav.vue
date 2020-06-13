<template>
  <div class="demo-home-nav" v-if="!group.hideInMobile">
    <div class="demo-home-nav__title">{{ group.title }}</div>
    <div class="demo-home-nav__group">
      <router-link
        class="demo-home-nav__block"
        v-for="navItem in group.items"
        :key="navItem.path"
        :to="navItem.path"
      >
        {{ navItem.title }}
        <svg class="demo-home-nav__icon" viewBox="0 0 59 100">
          <path fill="#B6C3D2" :d="path" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: Object
  },
  data() {
    return {
      path:
        "M57.2247557,52.4955814 C57.2893973,52.3662982 57.4025201,52.2531754 57.4510013,52.1238922 C58.5822294,49.7644736 58.2105401,46.8556012 56.2066503,44.9648342 L10.5373552,1.76808049 C8.04865327,-0.59133809 4.1216757,-0.478215349 1.76225712,2.01048655 C-0.597161458,4.49918846 -0.484038717,8.42616603 2.00466319,10.7855846 L42.9874418,49.5543883 L2.16626714,88.8888059 C-0.306274314,91.264385 -0.370915976,95.1913625 2.00466319,97.663904 C3.21669337,98.9244153 4.84889389,99.5708313 6.4649341,99.5708313 C8.01633264,99.5708313 9.56773119,98.9890569 10.7636009,97.8255079 L56.0127256,54.2085838 C56.0935276,54.1277818 56.1258485,53.9984986 56.2228108,53.9176965 C56.2874524,53.8530548 56.352094,53.8045736 56.4328959,53.7399321 C56.8045852,53.3682431 56.9823496,52.9157519 57.2247557,52.4955814 L57.2247557,52.4955814 Z"
    };
  }
};
</script>

<style lang="scss">
@import "../../common/style/var";

.demo-home-nav {
  &__title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }

  &__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;

    &:hover {
      background: darken(#f7f8fa, 3%);
    }

    &:active {
      background: darken(#f7f8fa, 6%);
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
  }
}
</style>
