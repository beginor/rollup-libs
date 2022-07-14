/* eslint-disable max-len */
import mapboxgl from 'mapbox-gl';
import { buffer } from '@turf/turf';
import accessToken from './token.js';
let frameHandle = 0;
void (async function init() {
    const map = new mapboxgl.Map({
        container: 'viewDiv',
        accessToken,
        style: 'mapbox://styles/mapbox/satellite-v9',
        zoom: 11.53,
        center: [138.7189, 35.1691],
        pitch: 76,
        bearing: -177.2,
    });
    document.getElementById('test')?.addEventListener('click', () => {
        map.setPaintProperty('3d-buildings', 'fill-extrusion-height', Math.random() * 250 + 50);
    });
    document.getElementById('freeCamera')?.addEventListener('click', () => {
        if (!!frameHandle) {
            window.cancelAnimationFrame(frameHandle);
            frameHandle = 0;
        }
        else {
            freeCamera(map);
        }
    });
    await map.once('load');
    addTerrain(map);
    addSky(map);
    // map.getStyle().layers?.forEach((layer: any) => {
    //     if (!!layer?.layout && !!layer?.layout?.['text-field']) {
    //         map.setLayoutProperty(layer.id, 'visibility', 'none');
    //     }
    // });
    const layers = map.getStyle().layers;
    let labelLayerId = '';
    for (const layer of layers) {
        if (layer.type === 'symbol' && !!layer.layout?.['text-field']) {
            labelLayerId = layer.id;
        }
    }
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': 0.6
        }
    }, labelLayerId);
    // await addCities(map);
})();
function addTerrain(map) {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
}
function addSky(map) {
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 90.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });
}
function updateCameraPosition(map, position, altitude, target) {
    const camera = map.getFreeCameraOptions();
    camera.position = mapboxgl.MercatorCoordinate.fromLngLat(position, altitude);
    camera.lookAtPoint(target);
    map.setFreeCameraOptions(camera);
}
function lerp(a, b, t) {
    return a * (1.0 - t) + b * t;
}
function lerpArr(a, b, t) {
    const result = [];
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        result[i] = lerp(a[i], b[i], t);
    }
    return result;
}
function freeCamera(map) {
    const animations = [
        {
            duration: 20000.0,
            animate: (phase) => {
                const start = [138.73375, 35.41914];
                const end = [138.72649, 35.33974];
                const alt = [7000.0, 6000.0];
                // interpolate camera position while keeping focus on a target
                // lat/lng
                const position = lerpArr(start, end, phase);
                const altitude = lerp(alt[0], alt[1], phase);
                const target = [138.73036, 35.36197];
                updateCameraPosition(map, position, altitude, target);
            }
        },
        {
            duration: 15000.0,
            animate: (phase) => {
                const start = [138.72649, 35.33974];
                const end = [138.72623, 35.31977];
                const alt = [6000.0, 6000.0];
                const target1 = [138.73036, 35.36197];
                const target2 = [138.74831, 35.34784];
                // interpolate both the camera position and target
                const position = lerpArr(start, end, phase);
                const altitude = lerp(alt[0], alt[1], phase);
                const target = lerpArr(target1, target2, phase);
                updateCameraPosition(map, position, altitude, target);
            }
        },
        {
            duration: 15000.0,
            animate: (phase) => {
                // create easing function for the animation
                const easeInOutQuad = function (t) {
                    return t < 0.5 ? 2.0 * t * t : (4.0 - 2.0 * t) * t - 1.0;
                };
                const start = [138.72623, 35.31977];
                const end = [138.73375, 35.41914];
                const alt = [6000.0, 7000.0];
                const target1 = [138.74831, 35.34784];
                const target2 = [138.73036, 35.36197];
                // interpolate both the camera position and target
                const position = lerpArr(start, end, easeInOutQuad(phase));
                const altitude = lerp(alt[0], alt[1], phase);
                const target = lerpArr(target1, target2, phase);
                updateCameraPosition(map, position, altitude, target);
            }
        }
    ];
    let animationIndex = 0;
    let animationTime = 0.0;
    let lastTime = 0.0;
    function frame(time) {
        animationIndex %= animations.length;
        const current = animations[animationIndex];
        if (animationTime < current.duration) {
            const phase = animationTime / current.duration;
            current.animate(phase);
        }
        const elapsed = time - lastTime;
        animationTime += elapsed;
        lastTime = time;
        if (animationTime > current.duration) {
            animationIndex++;
            animationTime = 0.0;
        }
        frameHandle = window.requestAnimationFrame(frame);
    }
    frameHandle = window.requestAnimationFrame(frame);
}
async function addCities(map) {
    const res = await fetch('../../assets/cities.geojson');
    const points = await res.json();
    const buffered = buffer(points, 5, { units: 'kilometers' });
    map.addLayer({
        id: 'dist-fill-ex',
        source: { type: 'geojson', data: buffered },
        type: 'fill-extrusion',
        paint: {
            'fill-extrusion-color': '#ff0000',
            'fill-extrusion-height': 10000,
            'fill-extrusion-opacity': 0.7
        }
    });
    map.addLayer({
        id: 'dist-symbol',
        source: { type: 'geojson', data: points },
        type: 'symbol',
        layout: {
            'text-field': ['get', 'name'],
            'text-offset': [0, -2]
        },
        paint: {
            'text-color': '#ffffff',
            'text-halo-color': '#000000',
            'text-halo-width': 2
        }
    });
}
//# sourceMappingURL=mapbox.js.map