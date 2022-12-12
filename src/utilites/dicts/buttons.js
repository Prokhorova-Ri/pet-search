/*
* EXAMPLE:
* IN SETUP:
* import { getButton } from "../utilites/dicts/buttons.js"
* const button = ref({})
* button.value = getButton('auth')
* return { button }
* IN TEMPLATE:
* <button :class="button.className">{{ button.name }}</button>
*/

const buttons = {
    auth: {
        name: 'Авторизация',
        code: 'auth',
        className: 'btn-auth'
    },
    reg: {
        name: 'Регистрация',
        code: 'reg',
        className: 'btn-reg'
    },
    enter: {
        name: 'Вход',
        code: 'enter',
        className: 'btn-enter'
    },
    map: {
        name: 'Показать на карте',
        code: 'map',
        className: 'btn-map'
    },
    card: {
        name: 'Показать карточку',
        code: 'card',
        className: 'btn-map'
    },
    reg_tab: {
        name: 'Регистрация',
        code: 'reg_tab',
        className: 'btn-tab-reg'
    },
    register_tab: {
        name: 'Регистрация',
        code: 'register_tab',
        className: 'btn-tab-register'
    },
    auth_tab: {
        name: 'Авторизация',
        code: 'auth_tab',
        className: 'btn-tab-auth'
    },
    enter_tab: {
        name: 'Авторизация',
        code: 'enter_tab',
        className: 'btn-tab-enter'
    },
    search: {
        name: 'Подобрать',
        code: 'search',
        className: 'btn-search'
    },
    more: {
        name: 'Загрузить еще',
        code: 'more',
        className: 'btn-more'
    }
}

export const getButton = (key) => {
    return buttons[key]
}
