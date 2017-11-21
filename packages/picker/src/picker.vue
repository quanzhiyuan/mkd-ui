<template>
  <div class="picker" :class="{ 'picker-3d': rotateEffect }">
    <div class="picker-toolbar"><slot></slot></div>
    <div class="picker-items">
      <picker-slot v-for="slot in slots" :valueKey="valueKey" :values="slot.values || []" :text-align="slot.textAlign || 'center'" :visible-item-count="visibleItemCount" :class-name="slot.className" :flex="slot.flex" v-model="values[slot.valueIndex]" :rotate-effect="rotateEffect" :divider="slot.divider" :content="slot.content" :itemHeight="itemHeight" :default-index="slot.defaultIndex"></picker-slot>
      <div class="picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../src/style/tools.scss";
.picker {
  overflow: hidden;
}

.picker-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 vw(37);
  @include border-bottom;
  > * {
    height: 100%;
    line-height: 40px;
  }
}

.picker-items {
  display: flex;
  justify-content: center;
  padding: 14px vw(20);
  text-align: right;
  font-size: 24px;
  position: relative;
}

.picker-center-highlight {
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  margin-top: -18px;
  background-color: #F8FAFD;
  pointer-events: none;
  z-index: -1;
}
</style>

<script type="text/babel">
export default {
  name: 'mkd-picker',

  componentName: 'picker',

  props: {
    slots: {
      type: Array
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: false
    },
    itemHeight: {
      type: Number,
      default: 40
    }
  },

  created() {
    this.$on('slotValueChange', this.slotValueChange);
    var slots = this.slots || [];
    var values = [];
    var valueIndexCount = 0;
    slots.forEach(slot => {
      if (!slot.divider) {
        slot.valueIndex = valueIndexCount++;
        values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
        this.slotValueChange();
      }
    });
  },

  methods: {
    slotValueChange() {
      this.$emit('change', this, this.values);
    },

    getSlot(slotIndex) {
      var slots = this.slots || [];
      var count = 0;
      var target;
      var children = this.$children.filter(child => child.$options.name === 'picker-slot');

      slots.forEach(function (slot, index) {
        if (!slot.divider) {
          if (slotIndex === count) {
            target = children[index];
          }
          count++;
        }
      });

      return target;
    },
    getSlotValue(index) {
      var slot = this.getSlot(index);
      if (slot) {
        return slot.value;
      }
      return null;
    },
    setSlotValue(index, value) {
      var slot = this.getSlot(index);
      if (slot) {
        slot.currentValue = value;
      }
    },
    getSlotValues(index) {
      var slot = this.getSlot(index);
      if (slot) {
        return slot.mutatingValues;
      }
      return null;
    },
    setSlotValues(index, values) {
      var slot = this.getSlot(index);
      if (slot) {
        slot.mutatingValues = values;
      }
    },
    getValues() {
      return this.values;
    },
    setValues(values) {
      var slotCount = this.slotCount;
      values = values || [];
      if (slotCount !== values.length) {
        throw new Error('values length is not equal slot count.');
      }
      values.forEach((value, index) => {
        this.setSlotValue(index, value);
      });
    }
  },

  computed: {
    values() {
      var slots = this.slots || [];
      var values = [];
      slots.forEach(function (slot) {
        if (!slot.divider) values.push(slot.value);
      });

      return values;
    },
    slotCount() {
      var slots = this.slots || [];
      var result = 0;
      slots.forEach(function (slot) {
        if (!slot.divider) result++;
      });
      return result;
    }
  },

  components: {
    PickerSlot: require('./picker-slot.vue')
  }
};
</script>
