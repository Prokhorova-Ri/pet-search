import { defineStore } from 'pinia'

export const useUserAgents = defineStore('userAgents', {
    state: () => ({
        mobile: false,

    }),
    actions: {
        changeDevice () {
            const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
            if (devices.test(navigator.userAgent)) {
                console.log("Вы используете мобильное устройство (телефон или планшет).");
                this.mobile = true;
            } else {
                console.log("Вы используете ПК.");
                this.mobile = false;
            }
        }
    },
    getters: {
        getStatusMobile (state) {
            return state.mobile || false
        }
    }
});