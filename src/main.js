import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './i18n';

// Crear la instancia de la aplicación
const app = createApp(App);

// Usar i18n en la instancia de la aplicación
app.use(i18n);

// Montar la aplicación
app.mount('#app');
