import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
const waveui = new WaveUI(app, {
  // Some Wave UI options.
})
library.add(faUserSecret)
app.use(store).use(router).use(waveui).mount('#app')
