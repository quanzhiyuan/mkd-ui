<template>
  <div class="page-search">
    <h1 class="page-title">Search</h1>
    <mkd-button @click.native="search1 = true" size="large">默认搜索</mkd-button>
    <mkd-popup v-model="search1"  position="right" :modal="false" class="mkd-search1">
      <mkd-search autofocus @search="search" v-model="value" @cancel="search1 = false"></mkd-search>
    </mkd-popup>

    <mkd-button @click.native="search2 = true" size="large">带前置icon搜索</mkd-button>
    <mkd-popup v-model="search2" position="right" :modal="false" class="mkd-search1">
      <mkd-search autofocus @search="search"  type="icon" v-model="value" @cancel="search2 = false">
        <img slot="lefticon" src="/static/assets/scan.svg" style="width:20px;height:20px;margin-right:10px;">
      </mkd-search>
    </mkd-popup>

    <mkd-button @click.native="search3 = true" size="large">带前置list的搜索</mkd-button>
    <mkd-popup v-model="search3" position="right" :modal="false" class="mkd-search1">
      <mkd-search autofocus  @search="search" :searchlist = "searchlist" :defaultlist = "defaultlist" type="list" v-model="value" @cancel="search3 = false">
      </mkd-search>
    </mkd-popup>

    <mkd-button @click.native="search4 = true" size="large">历史记录和热门搜索</mkd-button>
    <mkd-popup v-model="search4" position="right" :modal="false" class="mkd-search-tag">
      <mkd-search autofocus :hotHistory="hotHistory" @search="searchtag" type="tag" v-model="value" @cancel="search4 = false">
      </mkd-search>
    </mkd-popup>
  </div>
</template>

<script>
import { MessageBox } from '$src/index'
export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      search1: false,
      search2: false,
      search3: false,
      search4: false,
      searchlist: [
        {
          key: "0",
          value: "全部"
        },
        {
          key: "1",
          value: "条件一"
        },
        {
          key: "2",
          value:"条件二"
        },
        {
          key: "3",
          value:"条件三"
        },
        {
          key:"4",
          value:"条件四"
        },
        {
          key:"5",
          value:"条件五"
        }
      ],
      hotHistory: [
        "记录一",
        "记录二",
        "记录三",
        "记录四",
        "记录五",
        "记录六",
        "记录七",
        "记录八"
      ],
      defaultlist: "1"
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  },

  methods: {
    search (listkey, listValue) {  // 搜索回调，listkey列表选择的key，listValue列表选择的Value
      MessageBox.alert('搜索的内容是： ' + this.value + ',前置选择key ： ' + listkey + ',前置选择Value:' + listValue, '提示')
    },
    searchtag () {
      MessageBox.alert('搜索的内容是： ' + this.value, '提示')
    }
  }
};
</script>

<style lang="scss">
  .page-search {
    height: 100%;
    > *{
      margin-bottom: 20px !important;
    }
  }
  .mkd-search1 {
    width: 100%;
    min-height: 100%;
    background-color: #F2F6F9 !important;
  }
  .mkd-search-tag {
    width: 100%;
    min-height: 100%;
    background-color: #FFFFFF !important;
  }
</style>
