// UUID
import { useToast } from 'vue-toastification'
const toast = useToast()

//warning
const getUuid = (a = '') => {
    return (
        a
            /* eslint-disable no-bitwise */
            ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16)
            : (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, getUuid)
    );
}


// Получение фотографий с input и преобразование в image

export const getLoadFile = function(event) {
    let localImages = []
    console.warn('event.target.files.length', event.target.files.length)
    if (event.target.files.length <= 5) {
        [...event.target.files].forEach(file => {
            let id = getUuid()
            const typeFile = file.type.substr(file.type.lastIndexOf('.') + 1)
            if (typeFile.includes('image')) {
                const linkImg = window.URL.createObjectURL(file)
                if (file.size >= 20000000) {
                    localImages.push({ name: file.name, preview: linkImg, type: 'image', error: true, id: id })
                } else {
                    localImages.push({ name: file.name, preview: linkImg, type: 'image', id: id })
                }
            } else {
                if (file.size >= 20000000) {
                    localImages.push({ name: file.name, type: 'any', error: true, id: id })
                } else {
                    localImages.push({ name: file.name, type: 'any', id: id })
                }
            }
        })
    } else {
        setInfoToast("error", "Можно загрузить не более 5 фотографий ============")
    }
    return localImages
}

// Удаление локальных изображений

export const deleteLoadFile = function(payload) {
    const { images, id } = payload
    let newListImage = []
    images.forEach((image, index) => {
        if (image.id.includes(id)) {
            images.splice(index, 1)
        }
    })
    newListImage = [...newListImage, ...images]
    return newListImage
}


export const setInfoToast = (type, text) => {
    if (type === "error") {
        toast.error(text);
    }
}