import { Map, NavigationControl } from 'mapbox-gl';

import { MapboxLayer } from '@deck.gl/mapbox/typed';
import { Tile3DLayer } from '@deck.gl/geo-layers/typed';
import { Tiles3DLoader } from '@loaders.gl/3d-tiles';

import accessToken from './token.js';

const tileset = 'https://it.gdeei.cn/uav/sitesdata/images/uavModel/401xinchengzhongxue/tileset.json';

void (async function () {
  const map = new Map({
    container: 'mapview',
    accessToken,
    style: 'mapbox://styles/beginor/ckjf6mvge0hhk19p75nt647p5',
    zoom: 6.5,
    center: [113.4, 23.3],
  });

  window._mapview = map;

  const nav = new NavigationControl({});
  map.addControl(nav);

  await map.once('load');

  const firstTextlayerId = map.getStyle().layers?.find(l => l.layout?.['text-field'])?.id;
  const layer = new MapboxLayer({
    type: Tile3DLayer,
    id: 'tile-3d-layer',
    data: tileset,
    loaders: [Tiles3DLoader],
    loadOptions: {},
    onTilesetLoad: (tileset) => {
      const center = tileset.cartographicCenter;
      const zoom = Math.max(tileset.zoom, 15);
      if (!!center) {
        map.flyTo({
          center: { lng: center[0], lat: center[1] },
          zoom: zoom,
          curve: 1.43
        });
      }
    },
    _subLayerProps: {
        scenegraph: { _lighting: 'flat' }
    }
  });

  map.addLayer(layer, firstTextlayerId);

})();
