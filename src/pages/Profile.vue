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
          <div class="profile-card-close" @click.stop="cancelExitProfile">
            <img src="/src/assets/image/universal/arrow-left.svg" alt="Стрелка влево">
            <p>cвернуть</p>
          </div>
          <template v-if="schemaItem.code === 'exit'">
            <div class="profile-card-exit">
              <p class="profile-card-exit-title">Вы уверены что хотите выйти?</p>
              <div class="profile-card-exit-btns">
<!--                TODO BUTTON -->
                <Button name="exit"/>
                <Button @clickOnButton="cancelExitProfile" name="cancel"/>
              </div>
            </div>
          </template>
          <template v-if="schemaItem.code === 'cards'">
            <div class="profile-card-wrapper">
              <MainCard v-for="(index) in 20" :key="index" :index="index" />
            </div>
          </template>
          <template v-if="schemaItem.code === 'add'">
            <div class="profile-add-wrapper">
              <AddCard />
            </div>
          </template>
          <template v-if="schemaItem.code === 'settings'">
            <div class="profile-setting-wrapper">
              <AddSettings />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue'
import MainCard from "@/components/Universal/Cards/MainCard.vue";
import Button from "../components/Universal/Button.vue";
import axios from "axios";
import AddCard from "../components/Forms/AddCard.vue";
import AddSettings from "../components/Forms/AddSettings.vue";
export default {
  name: "profile",
  components: {AddSettings, AddCard, Button, MainCard },
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

    const animatesClose = reactive({
      cards: 'deactive-cards',
      add: 'deactive-add',
      settings: 'deactive-settings',
      exit: 'deactive-exit'
    })

    const block = ref()

    const clickOnBlock = (schema) => {
      const { item } = schema
      for (const key in item) {
        if (key === 'title') return
        schemaItem[key] = item[key]
      }
    }

    const cancelExitProfile = () => {
      schemaItem['active'] = animatesClose[schemaItem.code]
      setTimeout(() => {
        for (const key in schemaItem) {
          schemaItem[key] = ''
        }
      }, 400)
    }

    const addEventListenerClick = (ev) => {
      if (ev.target.classList.contains('profile') || ev.target.classList.contains('header-wrapper')) {
        cancelExitProfile()
      }
    }

    const addEventListenerButtons = (ev) => {
      if (ev.keyCode === 27) cancelExitProfile()
    }

    onMounted(() => {
      document.addEventListener("click", (e) => addEventListenerClick(e));
      document.addEventListener("keydown", (e) => addEventListenerButtons(e));
    })

    onBeforeUnmount(() => {
      document.removeEventListener("click", (e) => addEventListenerClick(e));
      document.removeEventListener("keydown", (e) => addEventListenerButtons(e));
    })

    return { block, blockData, schemaItem, cancelExitProfile, clickOnBlock }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/utilities/mixins";
@import "../assets/scss/utilities/variables";

.profile {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 150px);
  margin: 0 0 30px 0;
  &-card {
    &-exit {
      @include flexContainer(column, center, center);
      width: 100%;
      height: 100%;
      &-btns {
        @include flexContainer(row, center, center);
        gap: 10px;
        width: 100%;
      }
      &-title {
        display: inline-flex;
        @include fontFamily($font-family-manrope-500, 26px);
        margin: 0 0 30px 0;
        text-align: center;
      }
      &-yes {
        @include button(15px 0, $fff, 1px solid $black, $border-radius-10);
        @include fontFamily($font-family-manrope-600, 18px);
        width: 24%;
        transition: all 0.6s;
        &:hover {
          background: $red;
          color: white;
          transition: all 0.6s;
          border: 1px solid $red;
        }
      }
      &-no {
        @include button(15px 0, $fff, 1px solid $ginger, $border-radius-10);
        @include fontFamily($font-family-manrope-600, 18px);
        width: 24%;
        transition: all 0.6s;
        &:hover {
          background: $ginger;
          color: white;
          border: 1px solid $ginger;
        }
      }
    }
    &-close {
      @include flexContainer(row, flex-start, center);
      margin: 0 0 20px 0;
      gap: 10px;
      cursor: pointer;
      & > img {
        width: 15px;
        height: 15px;
      }
      & > p {
        @include fontFamily($font-family-manrope-500, 18px);
      }
    }
    &-wrapper {
      @include gridContainer(repeat(auto-fill, minmax(320px, 23%)));
      justify-content: space-between;
      column-gap: 20px;
      row-gap: 45px;
      width: 100%;
      height: 97%;
      overflow: auto;
      padding: 0 20px 30px 0;
      //padding-right: 20px;
      //padding-bottom: 30px;
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
  &-add {
    &-wrapper {
      width: 100%;
      height: 97%;
      overflow: auto;
      padding: 0 20px 30px 0;
      //padding-right: 20px;
      //padding-bottom: 30px;
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
    min-height: 850px;
    @media screen and (max-width: 1200px) {
      margin: 30px 0 0 0;
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
    opacity: 1;
    background-color: $fff;
    animation-duration: 1s;
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

.deactive {
  &-settings, &-cards, &-add, &-exit {
    position: absolute;
    background-color: $fff;
    animation-duration: 1s;
    animation-name: closeCard;
  }
  &-cards {
    left: 0;
    top: 0;
  }
  &-add {
    right: 0;
    top: 0;
  }
  &-settings {
    left: 0;
    bottom: 0;
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
    opacity: 0;
  }

  to {
    width: 100%;
    height:100%;
    opacity: 1;
  }
}


@keyframes closeCard  {
  from {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  to {
    width: 0;
    height: 0;
    opacity: 0;
  }
}

</style>
