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
    }
}

export const getButton = (key) => {
    return buttons[key]
}
