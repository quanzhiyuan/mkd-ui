<template>
  <div class="page-radio">
    <div class="page-title">radio</div>

    <mkd-radio
      class="page-part"
      title="单选框列表"
      v-model="value1"
      :options="options1" />
    <div>
      <mkd-cell title="选中的项">{{ value1 }}</mkd-cell>
    </div>

    <mkd-radio
      class="page-part"
      title="第二个单选框列表"
      v-model="value2"
      :options="options2" />
    <div>
      <mkd-cell title="选中的项">{{ value2 }}</mkd-cell>
    </div>

    <mkd-radio
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value3"
      :options="options3" />
      <div>
        <mkd-cell title="选中的项">{{ value3 }}</mkd-cell>
      </div>
    <mkd-radio
      align="right"
      class="page-part"
      title="选中禁用"
      v-model="value4"
      :options="options4" />
  </div>
</template>

<script>
export default {
  name: 'page-radio',

  data() {
    return {
      value1: '',
      value2: '值A',
      value3: '',
      value4: '值F',
      options1: ['选项A', '选项B', '选项C'],
      options2: [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ],
      options3: ['选项A', '选项B', '选项C'],
      options4: [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-radio {
  > *{
    margin-bottom: 10px;
  }
}
.page-radio .page-part {
  margin-top: 40px;
}
</style>
