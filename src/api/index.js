const siteHost = import.meta.env.VITE_APP_ENV_HOST_SITE ? import.meta.env.VITE_APP_ENV_HOST_SITE : 'http://localhost:3000'

const dictApi = {
    doc: `${siteHost}/api/documentation`,
    auth: `${siteHost}/api/user/auth`,
    create: `${siteHost}/api/user/create`
}

export const getApiUrl = (key) => {
    return dictApi[key]
}

export const getFullApi = ($url, $api) => {
    const getUrl = getApiUrl($url)
    return `${getUrl}/${$api}`
}
