// const mapboxgl = require("mapbox");
mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FsdGVyaiIsImEiOiJjbGl1OW1temkycWxsM2VsZ3JsNjZnbTVqIn0.HsVEIAXfOvKgua17WO7Hlg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [-90.19869926177068, 38.6289065203612],
  zoom: 15,
});

// Holds visible locations features for filtering
var locations = [
  {
    category: "Restaurant",
    lat: 38.627003,
    lon: -90.199404,
    name: "The Shrimp Shack",
  },
  {
    category: "Hotel",
    lat: 38.626402,
    lon: -90.196482,
    name: "Grand View Hotel",
  },
  {
    category: "Bar",
    lat: 38.631874,
    lon: -90.202857,
    name: "Cheers & Beers",
  },
  {
    category: "Restaurant",
    lat: 38.631022,
    lon: -90.196108,
    name: "Savory Bites",
  },
  {
    category: "Hotel",
    lat: 38.623701,
    lon: -90.19767,
    name: "Riverside Lodge",
  },
  {
    category: "Bar",
    lat: 38.630185,
    lon: -90.195419,
    name: "City Lights Lounge",
  },
  {
    category: "Restaurant",
    lat: 38.626805,
    lon: -90.206221,
    name: "Pasta Palace",
  },
  {
    category: "Hotel",
    lat: 38.633482,
    lon: -90.203927,
    name: "Urban Haven Hotel",
  },
  {
    category: "Bar",
    lat: 38.631557,
    lon: -90.198768,
    name: "Rooftop Vista Bar",
  },
  {
    category: "Restaurant",
    lat: 38.628999,
    lon: -90.190925,
    name: "Flavors of St. Louis",
  },
  {
    category: "Hotel",
    lat: 38.627218,
    lon: -90.204937,
    name: "Central Plaza Inn",
  },
  {
    category: "Bar",
    lat: 38.629893,
    lon: -90.192743,
    name: "Brewery Junction",
  },
  {
    category: "Restaurant",
    lat: 38.634567,
    lon: -90.198246,
    name: "Taste of the Gateway",
  },
  {
    category: "Hotel",
    lat: 38.625091,
    lon: -90.192165,
    name: "Tranquil Stay Suites",
  },
  {
    category: "Bar",
    lat: 38.62915,
    lon: -90.206754,
    name: "Harborfront Pub",
  },
  {
    category: "Restaurant",
    lat: 38.630789,
    lon: -90.201601,
    name: "Culinary Canvas",
  },
  {
    category: "Hotel",
    lat: 38.624357,
    lon: -90.199631,
    name: "Majestic Grand Hotel",
  },
  {
    category: "Bar",
    lat: 38.628442,
    lon: -90.194567,
    name: "Sunset Lounge",
  },
  {
    category: "Restaurant",
    lat: 38.633109,
    lon: -90.194932,
    name: "Riverside Dining",
  },
  {
    category: "Hotel",
    lat: 38.626699,
    lon: -90.190241,
    name: "Golden Gate Suites",
  },
  {
    category: "Bar",
    lat: 38.632512,
    lon: -90.205301,
    name: "Skyline Bar & Grill",
  },
  {
    category: "Restaurant",
    lat: 38.629831,
    lon: -90.191494,
    name: "Local Harvest",
  },
  {
    category: "Hotel",
    lat: 38.627919,
    lon: -90.207879,
    name: "Elegant Heights Inn",
  },
  {
    category: "Bar",
    lat: 38.634921,
    lon: -90.201051,
    name: "Whiskey and Rye",
  },
  {
    category: "Restaurant",
    lat: 38.630251,
    lon: -90.205753,
    name: "Cafe Metropolitan",
  },
  {
    category: "Hotel",
    lat: 38.632841,
    lon: -90.194077,
    name: "Regal Residency",
  },
  {
    category: "Bar",
    lat: 38.625798,
    lon: -90.195978,
    name: "Jazz & Jive Lounge",
  },
  {
    category: "Restaurant",
    lat: 38.626521,
    lon: -90.20703,
    name: "The Artful Plate",
  },
  {
    category: "Hotel",
    lat: 38.628704,
    lon: -90.193785,
    name: "Harmony Haven Hotel",
  },
  {
    category: "Bar",
    lat: 38.630956,
    lon: -90.203455,
    name: "Twisted Taproom",
  },
  {
    category: "Restaurant",
    lat: 38.632127,
    lon: -90.192359,
    name: "Casa Bella",
  },
  {
    category: "Hotel",
    lat: 38.629077,
    lon: -90.200416,
    name: "Grand Central Suites",
  },
  {
    category: "Bar",
    lat: 38.627513,
    lon: -90.198072,
    name: "Mingle Lounge",
  },
  {
    category: "Restaurant",
    lat: 38.624955,
    lon: -90.202601,
    name: "Rustic Roots",
  },
  {
    category: "Hotel",
    lat: 38.63372,
    lon: -90.199896,
    name: "Serenity Suites & Spa",
  },
  {
    category: "Bar",
    lat: 38.628376,
    lon: -90.204227,
    name: "Highland Hangout",
  },
];

const renderMapItems = (_locations) =>
  (document.getElementById("map-items").innerHTML = _locations
    .map(
      (el, id) =>
        `<div class="map-button-container"><div class="circle-list-item">${
          id + 1
        }</div> <button class='clean-button map-item-button' onclick="highlightItem('${
          el.name
        }', ${id + 1})">${el.name}</button></div>`
    )
    .join(" ")
    .toString());

map.on("load", function () {
  map.loadImage("pin.png", (error, image) => {
    if (error) {
      console.log(error);
      throw error;
    }
    map.addImage("pin", image);

    const _locations = locations.filter((location) => {
      return location.category === "Bar";
    });

    map.addSource("locations", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: createFeatures(_locations),
      },
    });
    map.addSource("locations-number", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: createFeatures(_locations),
      },
    });

    renderMapItems(_locations);

    map.addLayer({
      id: "locations",
      source: "locations",
      type: "symbol",
      layout: {
        "icon-image": "pin", // reference the image
        "icon-size": 0.3,
      },
    });
    map.addLayer({
      id: "labels",
      type: "symbol",
      source: "locations-number",
      layout: {
        "text-offset": [0, -0.25],
        "text-field": ["get", "label"],
        "text-font": ["Arial Unicode MS Bold"],
        "text-size": 12,
      },
      paint: {
        "text-color": "#ffffff",
      },
    });
    map.addSource("location-highlighted", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });
    map.addSource("location-highlighted-number", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });
    map.addLayer({
      id: "location-highlighted",
      source: "location-highlighted",
      type: "symbol",
      layout: {
        "icon-image": "pin", // reference the image
        "icon-size": 0.4,
      },
    });
    map.addLayer({
      id: "location-highlighted-number",
      type: "symbol",
      source: "location-highlighted-number",
      layout: {
        "text-offset": [0, -0.25],
        "text-field": ["get", "label"],
        "text-font": ["Arial Unicode MS Bold"],
        "text-size": 16,
      },
      paint: {
        "text-color": "#ffffff",
      },
    });
  });
});

const filterLocations = (type) => {
  unhighlightItem()
  const _locations = locations.filter((location) => {
    return location.category === type;
  });
  map.getSource("locations").setData({
    type: "FeatureCollection",
    features: createFeatures(_locations),
  });
  map.getSource("locations-number").setData({
    type: "FeatureCollection",
    features: createFeatures(_locations),
  });
  document.querySelectorAll(".map-button").forEach((button) => {
    button.classList.remove("map-button-active");
  });
  document
    .getElementById(`${type.toLowerCase()}-map-button`)
    .classList.add("map-button-active");

  renderMapItems(_locations);

  adjustMapBoundsToFeatures(map, "locations");
};

function adjustMapBoundsToFeatures(map, sourceId) {
  // Get the source data (GeoJSON) from the map's data source
  const sourceData = map.getSource(sourceId)._data;

  if (!sourceData || !sourceData.features.length) {
    console.log("No features to adjust bounds to.");
    return;
  }

  // Initialize the bounds with the coordinates of the first feature
  let bounds = new mapboxgl.LngLatBounds();

  // Loop through all features to expand the bounds
  sourceData.features.forEach((feature) => {
    const coords = feature.geometry.coordinates;

    // Extend the bounds with the coordinates of the current feature
    bounds.extend(coords);
  });

  // Set the map's bounds to fit all features
  map.fitBounds(bounds, {
    duration: 1000,
    padding: 50, // Optional padding around the bounds
  });
}

const createFeatures = (locations, label) => {
  return locations.map((location, id) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [location.lon, location.lat],
      },
      properties: {
        label: label ? label.toString() : `${id + 1}`,
        name: location.name,
        category: location.category,
      },
    };
  });
};

const highlightItem = (id, label) => {
  const highlighted = map.getSource("location-highlighted");
  const text = map.getSource("location-highlighted-number");

  if (!highlighted || !text) return;
  else {
    const location = locations.find((loc) => loc.name === id);
    if (!location) return;
    else {
      map.getSource("location-highlighted").setData({
        type: "FeatureCollection",
        features: createFeatures([location], label),
      });
      map.getSource("location-highlighted-number").setData({
        type: "FeatureCollection",
        features: createFeatures([location], label),
      });
    }
  }
};

const unhighlightItem = () => {
  map.getSource("location-highlighted").setData({
    type: "FeatureCollection",
    features: [],
  });
  map.getSource("location-highlighted-number").setData({
    type: "FeatureCollection",
    features: [],
  });
};

const displayPopup = (name, location) => {};
