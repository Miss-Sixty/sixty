# Button 按钮

### 引入

```javascript
全局
import { Button } from 'sixty';
Vue.use(Button);

组件内
import { Button } from 'sixty';
components:{
    [Button.name]:Button
}
```

## 代码演示

### 按钮类型

支持`primary`、`plain`、`dashed`三种类型，默认为`plain`

```html
<six-button type="primary" text="主要按钮" />
<six-button type="plain" text="朴素按钮" />
<six-button type="dashed" text="虚线按钮" />
```

### 禁用状态
通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击
```html
<six-button disabled type="primary">禁用状态</six-button>
<six-button disabled>禁用状态</six-button>
<six-button disabled type="dashed">禁用状态</six-button>
```

### 按钮圆角
通过`radius`属性来设置按钮圆角，支持`String`、`Number`类型。药丸按钮需设置的值大于等于按钮高度。
```html
<six-button :radius="0">方形按钮</six-button>
<six-button radius="6px">圆角按钮</six-button>
<six-button radius="999">药丸按钮</six-button>
<six-button radius="22px 0 22px 0">自定按钮</six-button>
```

### 幽灵按钮
通过`ghost`设置幽灵按钮，这时按钮背景变为透明，常用在有色背景上。
```html
<six-button ghost type="primary" text="幽灵按钮" />
<six-button ghost color="#7232dd" text="幽灵按钮" />
<six-button ghost type="dashed" color="#7232dd" text="幽灵按钮" />
```

### 按钮尺寸
支持`normal`、`small`、`mini`三种尺寸，默认为`normal`
```html
<six-button type="primary" size="normal">普通按钮</six-button>
<six-button type="primary" size="small">小型按钮</six-button>
<six-button type="primary" size="mini">迷你按钮</six-button>
```

### 块级元素
按钮在默认情况下为行内块级元素，通过`block`属性可以将按钮的元素类型设置为块级元素
```html
<six-button type="primary" block>块级元素</six-button>
```

### 页面导航
可以通过url属性进行`URL`跳转，或通过`to`属性进行路由跳转
```html
<six-button type="primary" url="http://www.baidu.com">URL 跳转</six-button>
<six-button type="primary" to="index">路由跳转</six-button>
```

### 自定义颜色
通过`color`属性可以自定义按钮的颜色
```html
<six-button color="#7232dd">单色按钮</six-button>
<six-button color="#7232dd" plain>单色按钮</six-button>
<six-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</six-button>
>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `plain` `dashed` | _string_ | `plain` |
| size | 尺寸，可选值为 `normal` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | _string_ | - |
| tag | 根节点的 HTML 标签 | _string_ | `button` |
| native-type | 原生 button 标签的 type 属性 | _string_ | - |
| radius | 设置按钮圆角 | _string_ | `2px` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| ghost | 按钮背景是否透明 | _boolean_ | `false` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |
