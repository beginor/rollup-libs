import { Map, NavigationControl } from 'mapbox-gl';
import accessToken from './token.js';

void (async () => {
    const map = new Map({
        container: 'mapview',
        accessToken,
        style: 'mapbox://styles/beginor/ckjf6mvge0hhk19p75nt647p5',
        center: { lng: 113.316, lat: 23.1 },
        zoom: 10,
        hash: true,
        projection: 'globe'
    });
    map.addControl(new NavigationControl({}), 'top-right');

    map.once('load').then(() => {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 90.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    })

    Object.assign(window, { _mapview: map });
})();
