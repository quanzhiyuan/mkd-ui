<template>
  <section class="page-demo">
    <div v-for="(group, key) in navs" :key="key" >
      <div class="page-title" v-text="group.title"></div>
      <div class="page-cotentblock">
        <div class="mkd-cells-wrapper">
        <mkd-cell
          v-for="item in group.list"
          :to="item.path" :key="item"
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
    .page-title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
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

<script type="text/babel">
  import { navs } from './route'

  export default {
    data() {
      return {
        navs: []
      }
    },
    created() {
      this.navs = navs
    }
  }
</script>
