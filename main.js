import { FormSection } from './src/components/FormSection';
import { WallpaperSection } from './src/components/WallpaperSection';
import '/src/styles/global.scss';

const app = document.querySelector('#app');

const formSection = FormSection();
const wallpaperSection = WallpaperSection();

app.insertAdjacentHTML("afterbegin", wallpaperSection);
app.insertAdjacentHTML("beforeend", formSection);
