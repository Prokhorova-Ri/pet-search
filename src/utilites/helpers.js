
// Получение фотографий с input и преобразование в image

export const getLoadFile = function(payload) {
    const { ev, id } = payload
    const images = ev.target.files
    console.warn('images', images.length)
    if (!images) return;
    if (images.length > 5) return console.error('Максимум 5 фотографий');
    [...images].forEach((image) => {
        const fr = new FileReader();
        fr.onload = () => {
            const img = document.createElement("img");
            img.src = fr.result;  // String Base64
            img.alt = image.name;
            img.className = `${ id }-image`
            const idElement = document.querySelector(`${ id }`)
            idElement ? idElement.append(img) : console.error('getLoadFile', `Такой id - ${ id } для шаблона картинки не найден`)
            document.querySelector(`#${ id }`).append(img);
        };
        fr.readAsDataURL(image);
    })
}