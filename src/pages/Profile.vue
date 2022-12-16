<template>
  <div class="profile">
    <div class="container">
      <div class="profile-wrapper">
        <div
            v-for="(item, index) in blockData"
            :key="index"
            class="profile-block"
            :class="`profile-block-${item.code}`"
            @click="clickOnBlock({ item, index })"
        >
          <p class="profile-block-title">{{ item.title || 'Пусто' }} </p>
        </div>
        <div
            v-if="schemaItem.active && schemaItem.code"
            class="profile-props"
            :class="schemaItem.active"
        >
          <template v-if="schemaItem.code === 'exit'">
            <div class="profile-card-exit">
              <p class="profile-card-exit-title">Вы уверечны что хотите выйти?</p>
              <div class="profile-card-exit-btns">
                <button>Да</button>
                <button @click="cancelExitProfile">Нет</button>
              </div>
            </div>
          </template>
          <template v-if="schemaItem.code === 'cards'">
            <div class="profile-card-wrapper">
              <MainCard v-for="(index) in 20" :key="index" :index="index" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import MainCard from "@/components/Universal/Cards/MainCard.vue";
export default {
  name: "profile",
  components: { MainCard },
  setup () {

    const schemaItem = reactive({
      active: '',
      code: ''
    })

    const blockData = reactive([
      { active: 'active-card', code: 'cards', title: 'Ваши карточки' },
      { active: 'active-add', code: 'add', title: 'Добавить карточку' },
      { active: 'active-settings', code: 'settings', title: 'Настройки' },
      { active: 'active-exit', code: 'exit', title: 'Выход' }
    ])

    const block = ref()

    const clickOnBlock = (schema) => {
      const { item, index } = schema
      for (const key in item) {
        if (key === 'title') return
        schemaItem[key] = item[key]
      }
    }

    const cancelExitProfile = () => {
      for (const key in schemaItem) {
        schemaItem[key] = ''
      }
      console.warn('schemaItem', schemaItem)
    }

    return { block, blockData, schemaItem, cancelExitProfile, clickOnBlock }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/utilities/mixins";
@import "../assets/scss/utilities/variables";

.profile {
  &-card {
    &-exit {
      @include flexContainer(column, center, center);
      width: 100%;
      height: 100%;
      animation-duration: 1s;
      animation-name: fadeIn;
      &-title {
        display: inline-flex;
        @include fontFamily($font-family-manrope-500, 20px);
        margin: 0 0 30px 0;
      }
    }
    &-wrapper {
      @include gridContainer(repeat(auto-fit, minmax(340px, 1fr)));
      column-gap: 20px;
      row-gap: 35px;
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-right: 20px;
      animation-duration: 1s;
      animation-name: fadeIn;
      /* полоса прокрутки (скроллбар) */
      &::-webkit-scrollbar {
        width: 4px; /* ширина для вертикального скролла */
        height: 2px; /* высота для горизонтального скролла */
        background-color: $fff;
        border-radius: 5px;
      }

      /* ползунок скроллбара */
      &::-webkit-scrollbar-thumb {
        background-color:  $ginger;
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #f3faf7;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #253861;
      }
    }
  }
  &-wrapper {
    position: relative;
    @include gridContainer(repeat(auto-fit, minmax(550px, 1fr)));
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    min-height: 750px;
    @media screen and (max-width: 1200px) {
      @include gridContainer(repeat(auto-fit, minmax(270px, 1fr)));
    }
  }
  &-props {
    position: absolute;
    padding: 30px 5px 30px 20px;
    border-radius: $border-radius-125rem;
  }
  &-block {
    @include flexContainer(row, center, center);
    padding: 30px 20px;
    height: inherit;
    border-radius: $border-radius-125rem;
    -webkit-box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    background-color: $fff;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.03);
    }
    &-title {
      @include fontFamily($font-family-manrope-500, 20px);
    }
    &-settings {
      //background-color: #90EE90;
    }
    &-cards {
      //background-color: white;
    }
  }
}

.active {
  &-settings, &-card, &-add, &-exit {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    animation-duration: 0.8s;
    animation-name: slideRight;
    -webkit-box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 14px 30px -4px rgba(34, 60, 80, 0.2);
  }
  &-add {
    right: 0;
    top: 0;
  }
  &-settings {
    left: 0;
    bottom: 0;
  }
  &-card {
    left: 0;
    top: 0;
  }
  &-exit {
    bottom: 0;
    right: 0;
  }
}

@keyframes slideRight {
  from {
    width: 0;
    height: 0;
  }

  to {
    width: 100%;
    height: 100%;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
