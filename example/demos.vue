<template>
  <section class="page-demo">
    <div v-for="(group, i) in navs" :key="i" >
      <div class="page-title" v-text="group.title"></div>
      <div class="page-cotentblock">
        <div class="mkd-cells-wrapper">
        <mkd-cell
          v-for="(item,i) in group.list"
          :to="item.path" :key="i"
          is-link>
          <div slot="title">
            <i :class="['indexicon', 'icon-' + item.icon]"></i>
            <span>{{ item.name }}</span>
          </div>
        </mkd-cell>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import '../src/assets/font/iconfont.css'
  import '../src/style/common.scss'

  export default {
    computed: {
      visible() {
        return ['/', '/header'].indexOf(this.$route.path) < 0
      }
    }
  }
</script>

<style lang="scss">
  .page-demo {
    padding-bottom: 50px;
    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
    .page-contentblock {
      &>:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-size: 0;
      }
      &>:last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
    .page-part {
      margin-bottom: 15px;
    }
  }
</style>
