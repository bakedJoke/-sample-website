import { createI18n } from "vue-i18n";

import en from '@/plugins/languages/en.json'
import tr from '@/plugins/languages/tr.json'

const i18n = createI18n({
    locale:'tr',
    messages:{
        tr,
        en
    }
})
export default i18n