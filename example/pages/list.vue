<template>
  <div class="page-list">
    <div class="page-title">list</div>
    <div>
      <div class="page-title">基础样式</div>
      <div class="mkd-lists-wrapper">
        <mkd-list title="标题文字" value="值"></mkd-list>
        <mkd-list title="标题文字" isSelect :selectValue="select" @selectchange="selectchange"></mkd-list>
        <mkd-list title="标题文字" value="带图片">
          <img slot="icon" style="width:22px;border-radius:3px;margin-right:10px;" src="../assets/100.png">
        </mkd-list>
        <mkd-list title="标题文字" is-link value="带链接"></mkd-list>
      </div>
      <div class="marginbtm"></div>
      <mkd-list is-link>
        <img slot="icon" style="height:88px;border-radius:6px;margin-right:10px;" src="../assets/100.png">
        <div slot="title" class="list1">
          <div class="list1-title">标题文字</div>
          <div class="list1-subtitle">SU225221</div>
          <div>824KG</div>
          <div>2012-12-10</div>
        </div>
      </mkd-list>
      <div class="marginbtm"></div>
      <mkd-list>
        <div slot="title" class="list2">
          <div class="list1-title">
            <div>标题文字</div>
            <div style="color:#F87E4D;">¥366.0</div>
          </div>
          <div class="list1-subtitle">
            <div>SU225221</div>
            <div>21</div>
            </div>
          <div>
            <div>824KG</div>
            <div>24KG</div>
          </div>
          <div>
            <div>7075</div>
            <div>5%</div>
          </div>
          <div>
            <div>70751</div>
            <div>51%</div>
          </div>
        </div>
      </mkd-list>

      <div class="page-title">其他</div>
        <div class="mkd-lists-wrapper">
          <mkd-list is-link>
            <img slot="icon" style="height:88px;border-radius:6px;margin-right:10px;" src="../assets/100.png">
            <div slot="title" class="list1">
              <div class="list1-title">标题文字</div>
              <div class="list1-subtitle">SU225221</div>
              <div>824KG</div>
              <div>2012-12-10</div>
            </div>
          </mkd-list>
          <mkd-list>
            <div slot="title" class="list2">
              <div class="list1-title">
                <div>标题文字</div>
                <div style="color:#F87E4D;">¥366.0</div>
              </div>
              <div class="list1-subtitle">
                <div>SU225221</div>
                <div>21</div>
                </div>
              <div>
                <div>824KG</div>
                <div>24KG</div>
              </div>
              <div>
                <div>7075</div>
                <div>5%</div>
              </div>
              <div>
                <div>70751</div>
                <div>51%</div>
              </div>
            </div>
          </mkd-list>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-list {
  padding-bottom: 100px;
}
.page-title {
  font-size: 20px;
  margin: 20px auto;
  text-align: center;
  display: block;
  line-height: 1;
}
.list2 {
  color: #999999;
  width: 100%;
  > * {
    height: 22px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
  }
  >.list1-title {
    font-size: 15px;
    color: #3F3F3F;
  }
  >.list1-subtitle {
    font-size: 14px;
    color: #3F3F3F;
  }
}
.list1 {
  color: #999999;
  > * {
    height: 22px;
    line-height: 22px;
  }
  >.list1-title {
    font-size: 15px;
    color: #3F3F3F;
  }
  >.list1-subtitle {
    font-size: 14px;
    color: #3F3F3F;
  }
}
</style>

<script>
export default {
 name: 'page-list',
 data () {
   return {
     select : true
   }
 },
 methods: {
   selectchange (val) {
     console.log(val)
   }
 }
}
</script>
