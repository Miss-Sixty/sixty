<template>
  <demo-section>
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <six-button type="default" text="默认按钮" />
        <six-button>默认按钮</six-button>
        <six-button type="primary" text="主要按钮" />
      </div>
      <six-button type="info" text="信息按钮" />
      <six-button type="warning" text="警告按钮" />
      <six-button type="danger" text="危险按钮" />
    </demo-block>

    <demo-block title="朴素按钮">
      <six-button plain type="primary">朴素按钮</six-button>
      <six-button plain type="info">朴素按钮</six-button>
    </demo-block>

    <h3></h3>

    <demo-block title="禁用按钮">
      <six-button disabled type="primary">禁用状态</six-button>
      <six-button disabled type="info">禁用状态</six-button>
    </demo-block>

    <demo-block title="按钮圆角">
      <six-button :radius="0">方形按钮</six-button>
      <six-button radius="6px">圆角按钮</six-button>
      <six-button radius="999">圆形按钮</six-button>
    </demo-block>

    <demo-block title="幽灵按钮">
      <div class="ghost">
        <div class="demo-button-row">
          <six-button type="primary" ghost>方形按钮</six-button>
          <six-button ghost>圆形按钮</six-button>
          <six-button ghost color="#fff">圆形按钮</six-button>
        </div>
        <six-button ghost color="#7232dd">圆形按钮</six-button>
      </div>
    </demo-block>

    <demo-block title="按钮尺寸">
      <div class="demo-button-row">
        <six-button type="primary" size="normal">普通按钮</six-button>
        <six-button type="primary">普通按钮</six-button>
        <six-button type="primary" size="small">小型按钮</six-button>
      </div>
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
      <!-- <six-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮<six-button> -->
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
  &-row {
    margin-bottom: $padding-sm;
  }
}
</style>
