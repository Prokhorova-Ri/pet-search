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
                    toast.success(data.info)
                }
            } else {
                // При запросе на бэкенд очищаем поля NewSchemaErrors
                this.deleteValueErrors()
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
        },

        deleteValueErrors () {
            for (const key in this.errors) {
                delete this.errors[key]
            }
        }
    },

    getters: {
        getNewSchemaErrors (state) {
            return state.errors || {}
        }
    }
})