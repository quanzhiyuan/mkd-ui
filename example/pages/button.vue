<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <mkd-button size="large">default</mkd-button>
      <mkd-button size="large" type="primary">primary</mkd-button>
      <mkd-button size="large" type="danger">danger</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button>default</mkd-button>
      <mkd-button type="primary">primary</mkd-button>
      <mkd-button type="danger">danger</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button size="small">default</mkd-button>
      <mkd-button size="small" type="primary">primary</mkd-button>
      <mkd-button size="small" type="danger">danger</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button disabled size="large">default</mkd-button>
      <mkd-button disabled size="large" type="primary">primary</mkd-button>
      <mkd-button disabled size="large" type="danger">danger</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button plain size="large">default</mkd-button>
      <mkd-button plain size="large" type="primary">primary</mkd-button>
      <mkd-button plain size="large" type="danger">danger</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button>
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mkd-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button'
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
