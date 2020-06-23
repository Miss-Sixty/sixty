import { addUnit } from "../utils";
import "./index.scss";
import { WHITE } from '../utils/constant';

export default {
  name: "SixButton",
  props: {
    type: {
      type: String,
      default: "plain",
    },
    size: {
      type: String,
      default: "normal",
    },
    radius: {
      type: [Number, String],
      default: "2px",
    },
    text: String,
    color: String,
    ghost: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: "button",
    },
    htmlType: String,
    block: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    hairline: {
      type: Boolean,
      default: false,
    },
    url: String,
    to: [String, Object],
    replace: {
      type: Boolean,
      default: false,
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const { type, size, plain, disabled, ghost, block, dashed } = this;
      return [
        "six-button",
        `six-button--${type}`,
        `six-button--${size}`,
        { "six-button--plain": plain },
        { "six-button--disabled": disabled },
        { "six-button--ghost": ghost },
        { "six-button--block": block },
        { "six-button--dashed": dashed },
      ];
    },
    style() {
      const { radius, color, plain, ghost } = this;
      let style = { "border-radius": addUnit(radius), }

      if (!color) return style;

      if (ghost || plain) {
        style.color = color;
        style.borderColor = color
      } else {
        style.color = WHITE
        style.background = color;

        //如果为渐变色则隐藏边框
        if (color.indexOf('gradient') !== -1) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }
      }

      return style
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
      const { to, url, replace, $router: router, $route: route } = this;
      if (to && router && route.path !== `/${to}`) {
        router[replace ? "replace" : "push"](to);
      } else if (url) {
        replace ? location.replace(url) : (location.href = url);
      }
    },
    onTouchstart(event) {
      this.$emit('touchstart', event);
    }
  },
  render() {
    const {
      tag,
      classes,
      text,
      style,
      $slots: slots,
      disabled,
      onClick, onTouchstart
    } = this;
    return (
      <tag class={classes} style={style} disabled={disabled} onclick={onClick}
        ontouchstart={onTouchstart}>
        <div class='six-button__content'>  {text || slots.default}</div>
      </tag>
    );
  },
};
