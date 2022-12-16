import axios from "axios";
import { getFullApi } from "./index";
import { ref } from 'vue'

export default function() {
    const loading = ref(false)
    const result = ref({})

    const setNewUser = async ($url, $api, $data) => {
        const url = getFullApi($url, $api)
        loading.value = true
        await axios.post(url, $data)
            .then((data) => {
                result.value = data?.data
                loading.value = false
            })
            .catch((error) => {
                loading.value = false
                console.error('setNewUser', error)
            })
    }
    return { setNewUser, result, loading }
}
