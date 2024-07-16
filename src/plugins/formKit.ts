import { plugin, defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

const config = defaultConfig({
    theme: 'genesis',
    plugins: [createMultiStepPlugin()],
});

export {
    config,
    plugin,
}