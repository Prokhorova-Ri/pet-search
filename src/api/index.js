const host = 'http://localhost:3000' // Сделать в ENV

const dictApi = {
    auth: `${host}/auth`
}

export const getApiUrl = (key) => {
    return dictApi[key]
}