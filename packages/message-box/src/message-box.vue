<template>
  <div class="mkd-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="mkd-msgbox" v-show="value" :style="{width: showCancelButton ? '72vw' : '48vw'}">
        <div class="mkd-msgbox-header" v-if="title !== ''">
          <div class="mkd-msgbox-title">{{ title }}</div>
        </div>
        <div class="mkd-msgbox-content" v-if="message !== ''">
          <span v-if="!showInput" class="mkd-msgbox-message" v-html="message"></span>
          <div class="mkd-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="mkd-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="mkd-msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-msgbox {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 72vw;
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(255,255,255,0.94);
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.25);
  border-radius: $border-radius;
  font-size: 16px;
  -webkit-user-select: none;
  overflow: hidden;
  backface-visibility: hidden;
  transition: .2s;
  * {
    @include box-sizing;
  }
  >.mkd-msgbox-header {
    padding: 30px 0 15px 0;
    >.mkd-msgbox-title {
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 17px;
      color: $font-color2;
    }
  }
  >.mkd-msgbox-content {
    padding: 0px 20px 20px 20px;
    @include border-bottom;
    min-height: 43px;
    position: relative;
    font-size: 13px;
    text-align: center;
    >.mkd-msgbox-message {
      color: $font-color1;
      display: inline-block;
      max-width: 41.6vw;
      text-align: left;
    }
    >.mkd-msgbox-input {
      >input {
        border: 0 solid #E5E5E5;
        border-radius: 3px;
        padding: 4px 5px;
        width: vw(219);
        height: 30px;
        appearance: none;
        outline: none;
      }
      >input.invalid {
        border-color: #ff4949;
        &:focus {
          border-color: #ff4949;
        }
      }
      >.errormsg {
        color: red;
        font-size: 12px;
        min-height: 18px;
        margin-top: 2px;
      }
    }
  }
  >.mkd-msgbox-btns {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    >.mkd-msgbox-btn {
      line-height: 35px;
      display: block;
      flex: 1;
      margin: 0;
      border: 0;
      &:focus {
        outline: none;
      }
    }
    >.mkd-msgbox-cancel {
      font-size: 16px;
      width: 50%;
      @include border-right;
      background-color: rgba(255,255,255,0.2);
      color: $font-color1;
      &:active {
        color: #000;
      }
    }
    >.mkd-msgbox-confirm {
      font-size: 16px;
      color: #519EF8;
      width: 50%;
        background-color: rgba(255,255,255,0.2);
      &:active {
       color: #519EF8;
      }
    }
  }
}
.msgbox-bounce-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.msgbox-bounce-leave-active {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}
</style>
<style src="mkd-ui/src/style/popup.css"></style>

<script type="text/babel">
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  import Popup from 'mkd-ui/src/utils/popup';
  export default {
    mixins: [ Popup ],
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      confirmButtonClasses() {
        let classes = 'mkd-msgbox-btn mkd-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' mkd-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'mkd-msgbox-btn mkd-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' mkd-msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
