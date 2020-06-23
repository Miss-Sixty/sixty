import { addUnit } from "../utils";
import "./index.scss";

export default {
  name: "SixButton",
  props: {
    type: {
      type: String,
      default: "default",
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
  },
  computed: {
    classes() {
      const { type, size, plain, disabled, ghost, block } = this;
      return [
        "six-button",
        `six-button--${type}`,
        `six-button--${size}`,
        { "six-button--plain": plain },
        { "six-button--disabled": disabled },
        { "six-button--ghost": ghost },
        { "six-button--block": block },
      ];
    },
    style() {
      const { radius, color } = this;
      return {
        "border-radius": addUnit(radius),
        color: color,
        "border-color": color,
      };
    },
  },
  methods: {
    onClick() {
      const { to, url, replace, $router: router, $route: route } = this;
      if (to && router && route.path !== `/${to}`) {
        router[replace ? "replace" : "push"](to);
      } else if (url) {
        replace ? location.replace(url) : (location.href = url);
      }
    },
  },
  render() {
    const {
      tag,
      classes,
      text,
      style,
      $slots: slots,
      disabled,
      onClick,
    } = this;
    return (
      <tag class={classes} style={style} disabled={disabled} onclick={onClick}>
        {text || slots.default}
      </tag>
    );
  },
};
