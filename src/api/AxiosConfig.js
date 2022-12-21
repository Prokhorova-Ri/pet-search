import axios from "axios";

const siteHost = import.meta.env.VITE_APP_ENV_HOST_SITE ? import.meta.env.VITE_APP_ENV_HOST_SITE : 'http://localhost:3000'

const defaultConfig = {
    baseUrl: siteHost,
    headers: {
        'Content-Type': 'application/json'
    }
}

const token = localStorage.getItem('token')
if (token) defaultConfig.headers['authorization'] = `Bearer ${token}`

export const DeafaultAPIInstance = axios.create(defaultConfig)