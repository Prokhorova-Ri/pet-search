const host = 'http://localhost:3000' // Сделать в ENV
//http://localhost:3000/api/entrance/auth/

const dictApi = {
    auth: `${host}/api/user/auth`,
    create: `${host}/api/user/create`
}

export const getApiUrl = (key) => {
    return dictApi[key]
}
