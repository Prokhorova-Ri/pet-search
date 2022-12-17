import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useSetResultInfo = defineStore('setResultInfo', {
    state: () => ({
        result: {},
        errors: {}
    }),
    actions: {

        setResultInfo (success, newResultInfo) {
            if (success) {
                const { status, data } = newResultInfo.value
                if (status === 200) {
                    toast.success(data.data.info)
                }
            } else {
                const { status, data } = newResultInfo
                if (status === 400) {
                    toast.error(data.info)
                }
                this.setNewSchemaErrors(data.errors)
            }
        },

        setNewSchemaErrors (errors) {
            // Пересобириаем с бэкенда Array и создаем новый обьект
            for (const key in errors) {
                this.errors[errors[key].param] = errors[key].msg
            }
            console.warn('NewSchemaErros', this.errors)
        }

    },
    getters: {
        getNewSchemaErrors (state) {
            return state.errors || {}
        }
    }
})