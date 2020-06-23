<template>
  <demo-section>
    <demo-block title="按钮类型">
      <six-button type="primary" text="主要按钮" />
      <six-button type="plain" text="朴素按钮" />
      <six-button type="dashed" text="虚线按钮" />
    </demo-block>

    <demo-block title="禁用按钮">
      <six-button disabled type="primary">禁用状态</six-button>
      <six-button disabled>禁用状态</six-button>
      <six-button disabled type="dashed">禁用状态</six-button>
    </demo-block>

    <demo-block title="按钮圆角">
      <div class="demo-button-row">
        <six-button :radius="0">方形按钮</six-button>
        <six-button radius="6px">圆角按钮</six-button>
        <six-button radius="999">药丸按钮</six-button>
      </div>
      <six-button radius="22px 0 22px 0">自定按钮</six-button>
    </demo-block>

    <demo-block title="幽灵按钮">
      <div class="ghost">
        <six-button ghost type="primary" text="幽灵按钮" />
        <six-button ghost color="#7232dd" text="幽灵按钮" />
        <six-button ghost type="dashed" color="#7232dd" text="幽灵按钮" />
      </div>
    </demo-block>

    <demo-block title="按钮尺寸">
      <six-button type="primary" size="normal">普通按钮</six-button>
      <six-button type="primary" size="small">小型按钮</six-button>
      <six-button type="primary" size="mini">迷你按钮</six-button>
    </demo-block>

    <demo-block title="块级元素">
      <six-button type="primary" block>块级元素</six-button>
    </demo-block>

    <demo-block title="页面导航">
      <six-button type="primary" url="http://www.baidu.com">URL 跳转</six-button>
      <six-button type="primary" to="index">路由跳转</six-button>
    </demo-block>

    <demo-block title="自定义颜色">
      <six-button color="#7232dd">单色按钮</six-button>
      <six-button color="#7232dd" plain>单色按钮</six-button>
      <six-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</six-button>
    </demo-block>
  </demo-section>
</template>
<script>
import SixButton from "../index";
export default {
  components: { SixButton }
};
</script>
<style lang="scss" >
@import "../../style/var";

.demo-button {
  background: $white;

  .six-button {
    &--large {
      margin-bottom: $padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: $padding-md;
    }
  }
  .ghost {
    background-color: $gray-3;
    padding: 10px;
  }

  .six-doc-demo-block {
    padding: 0 $padding-md;
  }

  .six-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: $padding-sm;
  }
}
</style>
