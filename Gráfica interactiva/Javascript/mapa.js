
mapboxgl.accessToken = 'pk.eyJ1IjoiamFoZXJyZXJhcGEiLCJhIjoiY2w0ZWg0YXpxMDNmZTNkdWhuNWtxcDg5YiJ9.XF-7-11nua2RYpCP5Imfhg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaherrerapa/cl4eh78it001114qsgydocsq9',
  center: [139.3829886432835, 35.7],
  zoom: 9
});

const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [139.70459871991972, 35.711312700018084]
        },
        properties: {
          title: 'Shinjuku',
          description: 'Es el más importante centro comercial y administrativo de la Metrópolis de Tokio. En el mismo, se encuentra su famosa estación de trenes, que es la más utilizada del mundo'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [139.64392284213977, 35.69214047736946]
        },
        properties: {
          title: 'Suginami',
          description: 'es una región especial de la Metrópolis de Tokio, en Japón. Es común que la región especial se denomine a sí mismo como la Ciudad de Suginami.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [139.6648005328746, 35.75459911874232]
        },
        properties: {
          title: 'Nerima',
          description: 'es una región especial de la Metrópolis de Tokio, en Japón. En 2005, la región especial tenía una población estimada de 714.700 habitantes, con una densidad de 14.300 personas por km² en un área de 48,16 km²'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [139.3082066335109, 35.65336808955509]
        },
        properties: {
          title: 'Hachiōji',
          description: 'Es una ciudad localizada dentro de Tokio, Japón. La ciudad está rodeada casi en su totalidad por montañas, que conforman la Cuenca de Hachiōji, que se abre al este en dirección al centro de Tokio'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [139.54005838828573, 35.64959967125107]
        },
        properties: {
          title: 'Chofu',
          description: 'es una ciudad localizada en Tokio, Japón. Fue fundada el 1 de abril de 1955. En 2003, la ciudad contaba con un estimado de 210.428 habitantes, y una densidad de 9.773,71 personas por km², en un área total de 21,53 km²'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type:"point",
          coordinates: [139.29374158580924, 35.73349568490542]
        },
        properties: {
          title: 'Akiruno',
          description: 'es una ciudad situada en la Prefectura de Tokio, Japón.En 2008, la ciudad tenía una población estimada de 81.475 habitantes y una densidad de población de 1.084,63 personas por km². El área total es 73.34 km². La ciudad fue fundada el 1 de septiembre de 1995'
        }
      }
      
    ]
  };

  for (const feature of geojson.features) {
    // crear un elemento HTML para cada rasgo
    const el = document.createElement('div');
    el.className = 'marker';
  
    // poner un marcador en cada punto del mapa
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 25 }) // añadir pop ups en los marcadores del mapa 
          .setHTML(
            `<h3>${feature.properties.title}</h3><p class="description">${feature.properties.description}</p>`
          )
      ).addTo(map);
    
  }