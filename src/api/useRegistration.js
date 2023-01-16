import { getFullApi } from "./index";
import { DeafaultAPIInstance } from './AxiosConfig'
import { computed, reactive, ref } from 'vue'
import { useSetResultInfo } from "../store/setResultInfoToast";
import { useRouter } from "vue-router";

export default function() {

    const user = reactive({
        token: localStorage.getItem('token') ||  null
    })
    const router = useRouter()
    const loading = ref(false)
    const infoResult = useSetResultInfo()
    const { setResultInfo, getNewSchemaErrors } = infoResult
    const result = ref({})

    // Регистарция нового пользователя

    const createNewUser = async ($url, $api, $data) => {
        const url = getFullApi($url, $api)
        loading.value = true
        await DeafaultAPIInstance.post(url, $data)
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

    // Авторизация нового пользователя

    const authUser = async ($url, $api, $data) => {
        console.warn('authUser:', $url, $api, $data)
        const urlAuth = getFullApi($url, $api)
        loading.value = true
        await DeafaultAPIInstance.post(urlAuth, $data)
            .then(({ data }) => {
                result.value = data || 'Успех'
                loading.value = false
                setResultInfo(true, result)
                setToken(data?.token)
                // DeafaultAPIInstance.interceptors.request.use(function (config) {
                //     config.headers['authorization'] = `Bearer ${ data?.token }`
                // })
                router.push('/profile')
            })
            .catch((error) => {
                setResultInfo(false, error.response)
                loading.value = false
            })
    }

    const logOutUser = () => {
        deleteToken()
        delete DeafaultAPIInstance.defaults.headers['authorization']
    }

    // Добавление токена в LocalStorage

    const setToken = (token) => {
        user.token = token || null
        localStorage.setItem('token', token)
    }

    //Удаляем токен из LocalStorage

    const deleteToken = () => {
        user.token = null
        localStorage.removeItem('token')
    }

    return {
        result,
        loading,
        errors: computed(() => getNewSchemaErrors) || {},
        createNewUser,
        authUser
    }
}
