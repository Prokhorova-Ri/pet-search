<template>
  <section class="search">
    <div class="search-wrapper">
      <div class="search-wrapper-where-block">
        <p class="search-wrapper-where">ГДЕ ВЫ ИЩЕТЕ</p>
        <InputSelected @updateSelectCity="(item) => valueFilterForm.city = item" :items="city" id="where" />
      </div>
      <div class="search-wrapper-who-block">
        <p class="search-wrapper-who">КОГО ВЫ ИЩЕТЕ</p>
        <InputCheckBoxRadio @updateValueWho="(item) => valueFilterForm.who_search = item" :items="who" name="main" />
      </div>
      <div class="search-wrapper-where-block">
        <p class="search-wrapper-type">ТИП ОБЪЯВЛЕНИЯ</p>
        <InputSelected @updateSelectCity="(item) => valueFilterForm.type_ads = item" :items="type" id="type" />
      </div>
      <div class="search-wrapper-where-block">
        <Button @clickOnButton="sendValueFilter" name="search" />
      </div>
    </div>
  </section>
</template>

<script>
import InputSelected from "../../components/Universal/Input/Selected.vue";
import InputCheckBoxRadio from "../../components/Universal/Input/CheckBoxRadio.vue";
import Button from "../../components/Universal/Button.vue";
import { computed, reactive } from "vue";
import { useConfigSite } from "../../store/config";
export default {
  name: "index",
  components: { InputSelected, InputCheckBoxRadio, Button },
  setup () {
    const store = useConfigSite()
    console.warn('store?.getConfigSite?', store?.getConfigSite)
    const valueFilterForm = reactive({
      city: "",
      who_search: "",
      type_ads: "",
    });

    const sendValueFilter = () => {
      console.log("sendValueFilter", valueFilterForm)
    }

    return {
      city: computed(() => store?.getConfigSite?.city || []),
      type: computed(() => store?.getConfigSite?.type_ads || []),
      who: computed(() => store?.getConfigSite?.who_search || []),
      valueFilterForm,
      sendValueFilter,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.search {
  &-wrapper {
    @include button(35px 40px, $fff, none, 1.25rem);
    @include gridContainer(repeat(auto-fit, minmax(210px, 1fr)));
    align-items: flex-end;
    gap: 20px;
    &-where {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
    &-who {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
    &-type {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
  }
}

</style>
