<template>
  <a class="mkd-list" :href="href">
    <div class="mkd-list-wrapper">
      <div class="mkd-list-title">
        <slot name="icon">
        </slot>
        <slot name="title">
          <span class="mkd-list-text" v-text="title"></span>
        </slot>
      </div>
      <div class="mkd-list-value" :class="{ 'is-link' : isLink}">
        <img v-if="selected" style="width:16px;" :src="selectedImgUrl">
        <slot v-else>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <i v-if="isLink" class="mkd-list-allow-right"></i>
  </a>
</template>

<script>
/**
 * mt-list
 * @module components/list
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
 * <mt-list title="标题文字" icon="back" is-link value="描述文字"></mt-list>
 * <mt-list title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-list>
 */
import selectedImg from '$src/assets/selectlist.png'
export default {
  name: 'mkd-list',
  data () {
    return {
      selectedImgUrl: selectedImg,
      selected: false
    }
  },
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    isLink: Boolean,
    selectValue: Boolean,
    isSelect: Boolean,
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
      $event.stopPropagation();
      $event.preventDefault();
      this.$router.push(this.href);
    },
    listSelectHandler ($event) {
      $event.stopPropagation();
      this.selected = !this.selected
      this.$emit('selectchange', this.selected)
    }
  },
  mounted: function () {
    if (this.isSelect) {
      this.selected = this.selectValue
      this.$el.addEventListener('click', this.listSelectHandler);
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-list {
  background-color: $color-white;
  box-sizing: border-box;
  color: inherit;
  min-height: $list-min-height;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: 100%;
  margin: 0px auto;
  padding: 11px 12px;
  box-shadow:0 0 0 0 #DCE1E8;
  &:active:after {
    background-color: #000;
    content: " ";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .1;
  }
  img {
    vertical-align: middle;
  }
  >.mkd-list-wrapper {
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
    >.mkd-list-title {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 15px;
      color: $font-color1;
      letter-spacing: 0;
      line-height: 14px;
      >.mkd-list-text {
        vertical-align: middle;
      }
    }
    >.mkd-list-value {
      color: $font-color3;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $font-color3;
      letter-spacing: 0;
    }
  }
  .mkd-list-allow-right::after {
    border: solid 1px #C0C7CE;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    position: absolute;
    top: 50% ;
    right: 15px;
    width: 10px;
    height: 10px;
    transform: translateY(-50%) rotate(45deg);
  }
  .is-link {
    margin-right: 24px !important;
  }
}
.mkd-lists-wrapper {
  &>*{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &>:not(:first-child) {
    background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;

  }
}

</style>
