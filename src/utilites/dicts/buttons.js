/*
* EXAMPLE:
* IN SETUP:
* import { getButton } from "../utilites/dicts/buttons.js"
* const button = getButton('auth')
* IN TEMPLATE:
* <button :class="button.className">{{ button.name }}</button>
*/

const buttons = {
    auth: {
        name: 'Вход',
        code: 'auth',
        className: 'btn-auth'
    },
    reg: {
        name: 'Регистрация',
        code: 'reg',
        className: 'btn-reg'
    }
}

export const getButton = (key) => {
    return buttons[key]
}
