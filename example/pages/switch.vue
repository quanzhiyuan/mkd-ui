<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <mkd-switch v-model="value1" @change="handleChange">
      </mkd-switch>
      <label>{{value1}}</label>
    </div>

    <div class="page-title">disabled Switch</div>
    <div class="page-part page-switch-padding">
      <mkd-switch v-model="value4" disabled @change="handleChange">
      </mkd-switch>
    </div>
    <div class="page-part page-switch-padding">
      <mkd-switch v-model="value5" disabled @change="handleChange">
      </mkd-switch>
    </div>

    <div class="page-title">单元格中的 Switch</div>
    <div class="marginbtm"></div>
    <mkd-cell :title="'选项 ' + value2">
      <mkd-switch v-model="value2" @change="handleChange"></mkd-switch>
    </mkd-cell>
    <div class="marginbtm"></div>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true,
      value5: false
    };
  },

  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
.page-switch {
  >.page-switch-padding{
    padding: 0 10px;
  }
}
</style>
