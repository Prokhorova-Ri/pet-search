import { defineStore } from 'pinia'

export const useSetResultInfo = defineStore('setResultInfo', {
    state: () => ({
        result: {}
    }),
    actions: {
        setResultInfo (newResultInfo) {
            this.result = newResultInfo
        }
    },
    getters: {
        getResultInfo (state) {
            return state.result
        }
    }
})