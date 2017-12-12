<template>
  <a class="mkd-tab-item"
    @click="tabClick(this)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="mkd-tab-item-icon">
      <slot name="icon"></slot>
      <span class="mkd-tab-item-badge"><slot name="badge"></slot></span>
    </div>
    <span class="mkd-tab-item-label"><slot></slot></span>
  </a>
</template>

<script>
/**
 * mkd-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mkd-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mkd-tab-item>
 */
import Common from '$src/utils/common'
export default {
  name: 'mkd-tab-item',

  data () {
    return {
      isSelected: 'is-selected'
    }
  },

  props: ['id'],

  methods: {
    tabClick () {
      this.$parent.$emit('input', this.id)
      this.removeClass ()
      this.addClass()
    },
    addClass () {
      let elems = [] // 添加is-selected 类
      let children =  Array.prototype.slice.call(this.$el.children)
      children.forEach( elem => {  //
        elems.push(elem)
        let children = Array.prototype.slice.call(elem.children)
        children.forEach( elem => {
          elems.push(elem)
        })
      })
      elems.forEach( elem => {
        let elemClass = elem.getAttribute && elem.getAttribute( "class" ) || ""
        let elemClassArray = elemClass && elemClass.split(' ') || []
        if ( !elemClassArray.find((element) => {
          return element === this.isSelected
        })) {
          elemClassArray.push(this.isSelected)
          elem.setAttribute('class', elemClassArray.join(' '))
        }
      })
    },
    removeClass () {
      let elems = []
      let siblingelems = Array.prototype.slice.call(Common.siblings(this.$el))
      siblingelems.forEach( elem => {
        let children =  Array.prototype.slice.call(elem.children)
        children.forEach( elem => {
          elems.push(elem)
          let children = Array.prototype.slice.call(elem.children)
          children.forEach( elem => {
            elems.push(elem)
          })
        })
      })
      elems.forEach( elem => {
        let currentClass = []
        let elemClass = elem.getAttribute && elem.getAttribute( "class" ) || ""
        let elemClassArray = elemClass && elemClass.split(' ') || []
        elemClassArray.forEach( elclass => {
          if (elclass !== this.isSelected) currentClass.push(elclass)
        })
        elem.setAttribute('class', currentClass.join(' '))
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-tab-item {
  display: block;
  padding: 7px 0 2px 0;
  flex: 1;
  text-decoration: none;
  >.mkd-tab-item-icon {
    position: relative;
    width: 24px;
    margin: auto;
    &:empty {
      display: none;
    }
    > span { // badge
      position: absolute;
      top: 3px;
      right: 0;
      transform: translate3d(50%,-50%,0);
    }
  }
  >.mkd-tab-item-label {
    display: inline-block;
    margin-top: 5px;
    color: inherit;
    font-size: $tab-item-font-size;
    line-height: 1;
  }
}
</style>
