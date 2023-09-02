// const mapboxgl = require("mapbox");
mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FsdGVyaiIsImEiOiJjbGl1OW1temkycWxsM2VsZ3JsNjZnbTVqIn0.HsVEIAXfOvKgua17WO7Hlg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [-73.85582719999996, 40.72493843347755],
  zoom: 14,
});

var locations = [
  {
    category: "Restaurant",
    name: "The Dinerbar",
    lat: 40.729419,
    lon: -73.8595936,
    address: "97-45, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Avellino Ristorante & Pizzeria",
    lat: 40.72966383,
    lon: -73.86028353,
    address: "9703, 64th Avenue, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Don Alex",
    lat: 40.7298353,
    lon: -73.8603779,
    address: "97-05, 64th Avenue, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Spring Thai Fusion & Bar",
    lat: 40.7294305,
    lon: -73.8613159,
    address: "96-40, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Fu Ying",
    lat: 40.7298942,
    lon: -73.8608554,
    address: "97-09, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Oceanic Boil",
    lat: 40.729613,
    lon: -73.861838,
    address: "96-18, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Blacksea Fish & Grill",
    lat: 40.7302077,
    lon: -73.863476,
    address: "95-36, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Dallas BBQ Rego Park",
    lat: 40.7326223,
    lon: -73.8635219,
    address: "61-35, Junction Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Mado Japanese",
    lat: 40.730418,
    lon: -73.864044,
    address: "95-16, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Sushi 33",
    lat: 40.728647,
    lon: -73.863526,
    address: "63-56, Booth Street, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Chaikhana Sem Sorok",
    lat: 40.728689,
    lon: -73.863642,
    address: "63-52, Booth Street, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Marani",
    lat: 40.7312592,
    lon: -73.8599373,
    address: "97-26, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Bella Roza Glatt",
    lat: 40.7289307,
    lon: -73.86344734,
    address: "94-03, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Bambooya",
    lat: 40.7299019,
    lon: -73.86058887,
    address: "97-11, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Art of Grill",
    lat: 40.7298394,
    lon: -73.8606356,
    address: "97-13, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Cheburechnaya",
    lat: 40.7276033,
    lon: -73.864133,
    address: "92-09, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Rego Garden",
    lat: 40.72822,
    lon: -73.863718,
    address: "93-03, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Lime & Salt",
    lat: 40.72713,
    lon: -73.8550347,
    address: "98-102, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Knish Nosh",
    lat: 40.727071,
    lon: -73.854877,
    address: "98-104, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Grand Sichuan",
    lat: 40.727032,
    lon: -73.854772,
    address: "98-108, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "Roast & Co",
    lat: 40.7266047,
    lon: -73.8535915,
    address: "100-12, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Marakand",
    lat: 40.727108,
    lon: -73.854981,
    address: "98-98, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "The Bund",
    lat: 40.726426,
    lon: -73.8530992,
    address: "100-30, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Kosher Mezze Pizzeria & Sushi",
    lat: 40.7265292,
    lon: -73.8533871,
    address: "100-18, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Asian Bowl",
    lat: 40.7254361,
    lon: -73.8509136,
    address: "10111, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Stix",
    lat: 40.7265792,
    lon: -73.851766,
    address: "101-15, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Mama Schnitzel",
    lat: 40.72724,
    lon: -73.852948,
    address: "100-22, 67th Avenue, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Mikihana Sushi & Poke",
    lat: 40.726178,
    lon: -73.85251,
    address: "101-10, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Due Fratelli",
    lat: 40.726094,
    lon: -73.852344,
    address: "101-16, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Restaurant",
    name: "Tandoori Food & Bakery",
    lat: 40.730482,
    lon: -73.861439,
    address: "95-12, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Restaurant",
    name: "J&D Pizza",
    lat: 40.73260025,
    lon: -73.85753493,
    address: "98-53, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Bar",
    name: "Tropix Bar & Lounge",
    lat: 40.730253,
    lon: -73.8636104,
    address: "95-32, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Bar",
    name: "The Dinerbar",
    lat: 40.729419,
    lon: -73.8595936,
    address: "97-45, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Bar",
    name: "BLVD Bistro & Bar",
    lat: 40.732534,
    lon: -73.866117,
    address: "61-18, 93rd Street, New York, NY, 11374",
  },
  {
    category: "Bar",
    name: "Lowkey Garden Lounge",
    lat: 40.7208488,
    lon: -73.8463469,
    address: "70-15, Austin Street, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "Manor Oktoberfest",
    lat: 40.717342,
    lon: -73.8570312,
    address: "73-11, Yellowstone Boulevard, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "Havana Dreams Cigar Lounge",
    lat: 40.724022,
    lon: -73.869293,
    address: "63-10, Woodhaven Boulevard, New York, NY, 11379",
  },
  {
    category: "Bar",
    name: "Forest Hills Station House",
    lat: 40.7200188,
    lon: -73.8450575,
    address: "106-11, 71st Avenue, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "Tap House",
    lat: 40.7193491,
    lon: -73.8423614,
    address: "72-07, Austin Street, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "Dirty Pierre's",
    lat: 40.71913909,
    lon: -73.84519614,
    address: "13, Station Square, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "The Billiard Company",
    lat: 40.7205502,
    lon: -73.84517677,
    address: "70-49, Austin Street, New York, NY, 11375",
  },
  {
    category: "Bar",
    name: "Xhale",
    lat: 40.7208868,
    lon: -73.8464413,
    address: "70-11, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Marshalls",
    lat: 40.7304277,
    lon: -73.8622289,
    address: "96-05, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Shop",
    name: "Burlington",
    lat: 40.7304277,
    lon: -73.8622289,
    address: "96-05, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Shop",
    name: "Old Navy",
    lat: 40.7304277,
    lon: -73.8622289,
    address: "96-05, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Shop",
    name: "T.J. Maxx",
    lat: 40.7331454,
    lon: -73.8638679,
    address: "61-01, Junction Boulevard, New York, NY, 11374",
  },
  {
    category: "Shop",
    name: "JCPenney",
    lat: 40.73495135,
    lon: -73.86778347,
    address: "92-59, 59th Avenue, New York, NY, 11373",
  },
  {
    category: "Shop",
    name: "Queen's Center Mall",
    lat: 40.73505,
    lon: -73.869676,
    address: "90-15, Queens Boulevard, New York, NY, 11373",
  },
  {
    category: "Shop",
    name: "Queen's Place Mall",
    lat: 40.7352363,
    lon: -73.8743608,
    address: "88-01, Queens Boulevard, New York, NY, 11373",
  },
  {
    category: "Shop",
    name: "Lot-Less",
    lat: 40.7294902,
    lon: -73.8614815,
    address: "96-32, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Shop",
    name: "Target",
    lat: 40.72102925,
    lon: -73.84781972,
    address: "70-00, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Men's Wearhouse",
    lat: 40.72102925,
    lon: -73.84781972,
    address: "70-00, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Gap Factory",
    lat: 40.721325,
    lon: -73.84730245,
    address: "69-39, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Banana Republic Factory Store",
    lat: 40.7198804,
    lon: -73.8443242,
    address: "71-18, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "LensCrafters",
    lat: 40.7199734,
    lon: -73.8445492,
    address: "71-02, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Verizon",
    lat: 40.7203623,
    lon: -73.8457362,
    address: "70-34, Austin Street, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "AT&T Store",
    lat: 40.717265,
    lon: -73.846618,
    address: ", Continental Avenue, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Trek",
    lat: 40.720986,
    lon: -73.8454574,
    address: "107-18, 70th Road, New York, NY, 11375",
  },
  {
    category: "Shop",
    name: "Bath & Body Works",
    lat: 40.7202792,
    lon: -73.8454006,
    address: "70-46, Austin Street, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "TITLE Boxing Club Forest Hills",
    lat: 40.721446,
    lon: -73.848595,
    address: "69-30, Austin Street, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "Club Pilates",
    lat: 40.720514,
    lon: -73.84546,
    address: "70-39, Austin Street, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "Orangetheory Fitness",
    lat: 40.7209037,
    lon: -73.845507,
    address: "107-14, 70th Road, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "StretchLab",
    lat: 40.7199441,
    lon: -73.8439235,
    address: "71-21, Austin Street, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "Spencer Pilates Arts",
    lat: 40.719639,
    lon: -73.842225,
    address: "108-12, 72nd Avenue, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "Long Island Jewish Medical Center - Forest Hills",
    lat: 40.729263,
    lon: -73.852017,
    address: "102-01, 66th Road, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "NYC Health + Hospitals - Gotham Health",
    lat: 40.7345797,
    lon: -73.8645061,
    address: "59-17, Junction Boulevard, New York, NY, 11368",
  },
  {
    category: "Fitness",
    name: "Mount Sinai Doctors - Forest Hills",
    lat: 40.7272936,
    lon: -73.853759,
    address: "99-01, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "Rego Park Pharmacy",
    lat: 40.72708185,
    lon: -73.85622603,
    address: "66-01, Saunders Street, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "Neighborhood Chemists Pharmacy",
    lat: 40.727039,
    lon: -73.853027,
    address: "100-17, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "CVS Pharmacy",
    lat: 40.730941,
    lon: -73.860544,
    address: "97-10, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "CVS Pharmacy",
    lat: 40.7265572,
    lon: -73.85383542,
    address: "100-02, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Fitness",
    name: "Rego Beauty Spa",
    lat: 40.728286,
    lon: -73.863676,
    address: "93-07, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "Laura's Beauty Touch",
    lat: 40.727329,
    lon: -73.856092,
    address: "97-20, 66th Avenue, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "Nirvana",
    lat: 40.727417,
    lon: -73.856038,
    address: "97-16, 66th Avenue, New York, NY, 11374",
  },
  {
    category: "Fitness",
    name: "Beauty World NYC",
    lat: 40.72932505,
    lon: -73.8634503,
    address: "63-52, Saunders Street, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Foodtown",
    lat: 40.7314334,
    lon: -73.8596022,
    address: "97-36, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Costco Wholesale",
    lat: 40.7326223,
    lon: -73.8635219,
    address: "61-35, Junction Boulevard, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Netcost Market",
    lat: 40.7287772,
    lon: -73.85989168,
    address: "97-10, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "CTown",
    lat: 40.7288699,
    lon: -73.862944,
    address: "94-06, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Key Food",
    lat: 40.72753,
    lon: -73.863798,
    address: "92-02, 63rd Drive, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Gastronom International Market",
    lat: 40.7340771,
    lon: -73.8503697,
    address: "63-32, 108th Street, New York, NY, 11375",
  },
  {
    category: "Grocery",
    name: "Levy's Bakery",
    lat: 40.7291763,
    lon: -73.8622054,
    address: "63-79, Saunders Street, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Paris Baguette",
    lat: 40.730136,
    lon: -73.861503,
    address: "96-33, Queens Boulevard, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Andre's Hungarian Bakery",
    lat: 40.7264442,
    lon: -73.8531571,
    address: "100-28, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Grocery",
    name: "Rokhat Kosher Bakery",
    lat: 40.7258201,
    lon: -73.8594399,
    address: "65-43, Austin Street, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Rego Park Wines & Liquors",
    lat: 40.73124,
    lon: -73.859989,
    address: "97-24, 63rd Road, New York, NY, 11374",
  },
  {
    category: "Grocery",
    name: "Empire Liquors",
    lat: 40.7249455,
    lon: -73.849882,
    address: "103-05, Queens Boulevard, New York, NY, 11375",
  },
  {
    category: "Transportaion",
    name: "63rd Drive–Rego Park station (R train)",
    lat: 40.729757,
    lon: -73.861597,
    address: "63rd Dr, Queens, NY 11374",
  },
  {
    category: "Transportaion",
    name: "67 Av (R train)",
    lat: 40.54099,
    lon: -79.16299,
    address: "44, R R Avenue, Homer City, PA,",
  },
  {
    category: "Transportaion",
    name: "Forest Hills 71 Av (E, F, R trains)",
    lat: 29.725787,
    lon: -84.986734,
    address: "71, Avenue E, Apalachicola, FL, 32320",
  },
  {
    category: "Transportaion",
    name: "LIRR – Forest Hills",
    lat: 40.721004,
    lon: -73.845018,
    address: "71st Ave, Forest Hills, NY 11375",
  },
  {
    category: "Transportaion",
    name: "Queens Blvd/65 Av Bus Stop (Q60)",
    lat: 44.748997,
    lon: -108.740932,
    address: "65, Queens Boulevard, Powell, WY,",
  },
  {
    category: "Transportaion",
    name: "Queens Blvd/67 Av Bus Stop (Q60, QM11, QM18)",
    lat: 44.748972,
    lon: -108.740614,
    address: "67, Queens Boulevard, Powell, WY,",
  },
  {
    category: "Transportaion",
    name: "63 Rd/Queens Blvd Bus Stop (Q38, QM11)",
    lat: 40.732278,
    lon: -73.8668,
    address: "92-63, Queens Boulevard, New York, NY, 11374",
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
  unhighlightItem();
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
      const popup = document.getElementById("map-popup");
      const title = document.getElementById("map-popup-title");
      const address = document.getElementById("map-popup-address");
      const url = document.getElementById("map-popup-url");

      popup.style.display = "block";
      title.textContent = location.name;
      address.textContent = location.address;
      url.href = `https://www.google.com/maps?q=${location.lat},${location.lon}`;
    }
  }
};

const unhighlightItem = () => {
  document.getElementById("map-popup").style.display = "none";
  map.getSource("location-highlighted").setData({
    type: "FeatureCollection",
    features: [],
  });
  map.getSource("location-highlighted-number").setData({
    type: "FeatureCollection",
    features: [],
  });
};
