<template>
  <a class="mkd-cell" :href="href">
    <div class="mkd-cell-wrapper">
      <div class="mkd-cell-title">
        <slot name="icon" style="margin-right:10px;">
        </slot>
        <slot name="title">
          <span class="mkd-cell-text" v-text="title"></span>
        </slot>
      </div>
      <div class="mkd-cell-value" :class="{ 'is-link' : isLink , 'is-edit': isEdit}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <i v-if="isLink" class="mkd-cell-allow-right"></i>
  </a>
</template>

<script>
/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mkdui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
  name: 'mkd-cell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    isLink: Boolean,
    isEdit: Boolean,
    value: {}
  },

  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-cell {
  background-color: $color-white;
  box-sizing: border-box;
  color: inherit;
  height: $cell-min-height;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: vw(359);
  margin: 0px auto;
  padding: 0px 12px;
  border-radius: 4px;
  img {
    vertical-align: middle;
  }
  >.mkd-cell-wrapper {
    background-origin: content-box;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 15px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    width: 100%;
    height: 100%;
    >.mkd-cell-title {
      flex: 1;
      font-size: 15px;
      color: #999999;
      letter-spacing: 0;
      line-height: 14px;
      >.mkd-cell-text {
        vertical-align: middle;
      }
    }
    >.mkd-cell-value {
      color: $cell-value-color;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
    }
  }
  .mkd-cell-allow-right::after {
    border: solid 1px #C0C7CE;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    position: absolute;
    top: 50% ;
    right: 20px;
    width: 5px;
    height: 5px;
    transform: translateY(-50%) rotate(45deg);
  }
  .is-link {
    margin-right: 24px !important;
  }
  .is-edit {
    color: #3F3F3F !important;
  }
}
.mkd-cells-wrapper {
  &>*{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &>:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &>:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &>:not(:first-child) {
    background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;

  }
}

</style>
