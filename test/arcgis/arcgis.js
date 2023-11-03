import Map from 'https://js.arcgis.com/4.28/@arcgis/core/Map.js';
import MapView from 'https://js.arcgis.com/4.28/@arcgis/core/views/SceneView.js';

const baseUrl = 'https://js.arcgis.com/4.28/';

await loadStyle(`${baseUrl}@arcgis/core/assets/esri/css/main.css`);

const esriConfig = {
    assetsPath: `${baseUrl}@arcgis/core/assets/esri`,
    locale: 'zh-cn'
};
const global = Object.assign(window, { esriConfig });
const map = new Map({
  basemap: "navigation-3d",
  ground: "world-elevation"
});
const mapview = new MapView({
    container: 'test-view',
    map,
    center: [112.3, 23.4],
    zoom: 7
});
