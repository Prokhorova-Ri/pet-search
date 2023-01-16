import axios from "axios";
import { getFullApi } from "./index";
import { ref } from 'vue'

export default function() {
    const loading = ref(false)
    const result = ref({})

    const getDocumentation = async ($url, $api) => {
        const url = getFullApi($url, $api)
        // create a promise for the axios request
        loading.value = true
        await axios.get(url)
            .then((data) => {
                result.value = data?.data
                loading.value = false
            })
            .catch((error) => {
                loading.value = false
                console.error('error', error)
            })
        // // using .then, create a new promise which extracts the data
        // const successPromise = promise.then((response) => response.data)
        // // return it
        // return successPromise
    }
    return { getDocumentation, result, loading }
}
