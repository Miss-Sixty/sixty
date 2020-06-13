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

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<six-button type="default">默认按钮</six-button>
<six-button type="primary">主要按钮</six-button>
<six-button type="info">信息按钮</six-button>
<six-button type="warning">警告按钮</six-button>
<six-button type="danger">危险按钮</six-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<six-button disabled>禁用状态</six-button>
<six-button round size="mini" disabled
  >禁用状<six-button></six-button
></six-button>
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html
<six-button square>方形按钮</six-button>
<six-button round>圆形按钮</six-button>
<six-button round size="mini">圆形按钮</six-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html
<six-button icon="empty" />
<six-button icon="empty" type="primary">按钮</six-button>
<six-button icon="https://img.yzcdn.cn/vant/logo.png" type="info"
  >按钮</six-button
>
```

### 按钮尺寸

支持`large`、`normal`、`mini`两种尺寸，默认为`normal`

```html
<six-button size="large" type="primary" text="大号按钮" />
<six-button size="normal" type="primary" text="普通按钮" />
<six-button size="small" type="primary" text="小型按钮" />
<six-button size="mini" type="primary" text="迷你按钮" />
```

### 自定义背景颜色

通过`bg-color`属性可以自定义按钮背景颜色

```html
<six-button bg-color="#ff9a9e">单色按钮</six-button>
<six-button bg-color="linear-gradient(to right,#4bb0ff#6149f6)"
  >渐变色按钮</six-button
>
```

### 自定义文字颜色

通过`color`属性可以自定义按钮文字颜色

```html
<six-button bg-color="red" color="#ff0">黄色文字</six-button>
<six-button bg-color="linear-gradient(to right,#4bb0ff,#6149f6)" color="#fff"
  >白色文字</six-button
>
```

## API

### Props

| 参数     | 说明                                                       | 类型      | 默认值    | 版本 |
| -------- | ---------------------------------------------------------- | --------- | --------- | ---- |
| type     | 类型，可选值为 `primary` `info` `warning` `danger`         | _string_  | `default` | -    |
| size     | 尺寸，可选值为 `large` `mini` `small`                      | _string_  | `normal`  | -    |
| text     | 按钮文字                                                   | _string_  | -         | -    |
| bg-color | 按钮背景颜色，支持传入`linear-gradient`渐变色              | _string_  | -         | -    |
| color    | 按钮文字颜色                                               | _string_  | -         | -    |
| icon     | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon) | _string_  | -         | -    |
| square   | 是否为方形按钮                                             | _boolean_ | `false`   | -    |
| round    | 是否为圆形按钮                                             | _boolean_ | `false`   | -    |
| disabled | 是否禁用按钮                                               | _boolean_ | `false`   | -    |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |
