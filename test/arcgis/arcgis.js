import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
const esriConfig = {
    assetsPath: '/node_modules/@arcgis/core/assets/esri',
    locale: 'zh-cn'
};
const global = Object.assign(window, { esriConfig });
const map = new Map({
    basemap: 'streets',
});
const mapview = new MapView({
    container: 'viewDiv',
    map
});
//# sourceMappingURL=arcgis.js.map