import { defineStore } from 'pinia'

export const useConfigSite = defineStore('configSite', {
    state: () => ({
        config: {
            city: [
                { id: 0, code: 'empty', name: 'Выберите город' },
                { id: 1, code: 'spb', name: 'Сантк-Петербург' },
                { id: 2, code: 'msk', name: 'Москва' },
                { id: 3, code: 'kzn', name: 'Казань' }
            ],
            who_search: [
                { id: 0, code: 'empty', name: 'Не важно' },
                { id: 1, code: 'dog', name: 'Собака' },
                { id: 2, code: 'cat', name: 'Кошка' }
            ],
            type_ads: [
                { id: 0, code: 'all', name: 'Все обьявления' },
                { id: 1, code: 'last', name: 'Потерян' },
                { id: 2, code: 'find', name: 'Найден' },
                { id: 3, code: 'give', name: 'Отдам' },
            ]
        }
    }),
    actions: {},
    getters: {
        getConfigSite (state) {
            return state.config || {}
        }
    }
})
