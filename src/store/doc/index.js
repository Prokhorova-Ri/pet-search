import { defineStore } from 'pinia'
import axios  from "axios";

export const useDocumentation = defineStore('documentation', {
    state: () => ({
        doc: null
    }),
    actions: {
         async getDocumentation () {
             const url = 'http://localhost:3000/api/documentation/get'
            await axios.get(url)
                .then(({ data }) => {
                    this.doc = data || null
                })
                .catch((error) => {
                    console.warn('error', error)
                })
        }
    },
    getters: {
        getPageDoc (state) {
            console.warn('state.doc', state.doc)
            return state.doc || {}
        }
    }
})
