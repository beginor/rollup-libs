/* eslint-disable max-len */
import mapboxgl from 'mapbox-gl';
import accessToken from './token.js';
void (async function () {
    const map = new mapboxgl.Map({
        container: 'viewDiv',
        accessToken,
        style: 'mapbox://styles/beginor/ckjf6ghja1lzt19qrsanpww3i',
        zoom: 6.5,
        center: [113.4, 23.3],
    });
    await map.once('load');
    //
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    //
    map.addSource('hillshade-source', { type: 'raster-dem', url: 'mapbox://mapbox.terrain-rgb' });
    map.addLayer({
        id: 'hillshade-layer',
        type: 'hillshade',
        source: 'hillshade-source',
        paint: {
            'hillshade-highlight-color': '#008924',
            'hillshade-shadow-color': '#000000'
        }
    }, 'aerialway');
})();
//# sourceMappingURL=hillshade.js.map