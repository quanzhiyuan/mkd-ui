<template>
  <div class="page-lazyload">
    <h1 class="page-title">Lazy Load</h1>
    <ul class="page-lazyload-list">
      <li class="page-lazyload-listitem" v-for="item in list">
        <img v-lazy="item" class="page-lazyload-image">
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.page-lazyload {
  .page-lazyload-list {
    text-align: center;
    >.page-lazyload-list-listitem {
      width: 300px;
      margin: 0 auto;
      margin-bottom: 10px;
      background-color: #ddd;
    }
  }
  >.page-lazyload-image {
    display: block;
    width: 100%;
  }
  >.page-lazyload-image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

}
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468441&client_id=200547&scode=S25fS0lhaC8zSEduRTlmS0pZaXN2&width=1100&height=660&sign=61cea02092de4e08217f36be4b015cab677fde96',
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468421&client_id=200547&scode=Uz1RL3ZmVERTZis0aDMrV0orazg9&width=1100&height=660&sign=153e8c10fadd90009f4f7a8a80fc615f366549b8',
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468409&client_id=200547&scode=RnNzTkNpRFdPVEQyOHZSME5USHVl&width=1100&height=660&sign=ea12c9cd25360296990ea996f607d397f618bd69',
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468387&client_id=200547&scode=N0hkcFRKUnFoRVR3UnNJa3crOGNw&width=1100&height=660&sign=620f78fe2b0fa73f06c1ab9802466dd2ad1be994',
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468365&client_id=200547&scode=LVptUHdUTnNVYlJOTWJXMlZiMGJa&width=1100&height=660&sign=6b664bce243608d73e803ef42c085cd8fdc98fe5',
          'http://api.kingdee.com/kdrive/user/file/thumbnail?file_id=11468337&client_id=200547&scode=bnMvd1JqdEZSNmlVdDFfcl9QOHl3&width=1100&height=660&sign=fdfc60ea59605f80dd0221ae7c056a32d9e88f5c'
        ]
      }
    }
  }
</script>
