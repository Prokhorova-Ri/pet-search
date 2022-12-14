<template>
 <div class="checkbox-radio" >
   <div class="checkbox-radio-form" v-for="item in items" :key="item.id">
     <input @change="sendValue(item.name)" ref="input" class="custom-radio" :id="item.code" type="radio" :name="name" :value="item.code">
     <label :for="item.code">{{ item.name }}</label>
   </div>
 </div>
</template>

<script>
export default {
  name: "CheckBoxRadio",
  props: {
    items: {
      type: Object,
      default: () => []
    },
    name: {
      type: String,
      default: 'empty'
    }
  },
  emits: ["updateValueWho"],
  setup (props, context) {
    const sendValue = (payload) => {
      context.emit("updateValueWho", payload)
    }
    return { sendValue }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

  .checkbox {
    &-radio {
      @include gridContainer(repeat(auto-fit, minmax(50px, 1fr)));
      min-height: 56px;
      border: 1px solid $g-9D9B95;
      border-radius: 10px;
      &-form {
        min-height: inherit;
        display: flex;
        align-items: center;
        border-right: 1px solid $g-9D9B95;
        width: 100%;
        justify-content: center;
        &:last-child {
          border-right: none;
        }
        & > label {
          @include fontFamily($font-family-manrope-600, 14px, $g-9D9B95);
        }
      }
    }
  }

/* для элемента input c type="radio" */
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
/* для элемента label связанного с .custom-radio */
.custom-radio+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
/* создание в label псевдоэлемента  before со следующими стилями */
.custom-radio+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
/* стили при наведении курсора на радио */
.custom-radio:not(:disabled):not(:checked)+label:hover::before {
  border-color: #b3d7ff;
}
/* стили для активной радиокнопки (при нажатии на неё) */
.custom-radio:not(:disabled):active+label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
/* стили для радиокнопки, находящейся в фокусе */
.custom-radio:focus+label::before {
  box-shadow: 0 0 0 0.2rem rgba(249,150,30, 0.25);
}
/* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
.custom-radio:focus:not(:checked)+label::before {
  border-color: #80bdff;
}
/* стили для радиокнопки, находящейся в состоянии checked */
.custom-radio:checked+label::before {
  border-color: #0b76ef;
  background-color: $ginger;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
/* стили для радиокнопки, находящейся в состоянии disabled */
.custom-radio:disabled+label::before {
  background-color: #e9ecef;
}
</style>
