import axios from "axios";
import { getFullApi } from "./index";
import { computed, ref } from 'vue'
import { useSetResultInfo } from "../store/setResultInfoToast";

export default function() {

    const loading = ref(false)
    const infoResult = useSetResultInfo()
    const { setResultInfo, getNewSchemaErrors } = infoResult
    const result = ref({})

    const createNewUser = async ($url, $api, $data) => {
        const url = getFullApi($url, $api)
        loading.value = true
        await axios.post(url, $data)
            .then((data) => {
                result.value = data || 'Успех'
                loading.value = false
                setResultInfo(true, result)
            })
            .catch((error) => {
                setResultInfo(false, error.response)
                loading.value = false
            })
    }

    console.warn('getNewSchemaErrors', getNewSchemaErrors)
    return {
        result,
        loading,
        errors: computed(() => getNewSchemaErrors) || {},
        createNewUser
    }
}
