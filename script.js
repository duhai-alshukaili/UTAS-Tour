// Initialize the map with markers
// Data for the cities and their coordinates
const cities = {
    Musandam: { lat: 26.1828201, lng: 56.2375022 },
    Shinas: { lat: 24.7999632, lng: 56.426667 },
    Sohar: { lat: 24.293838, lng: 56.7796236 },
    Musannah: { lat: 23.7431743, lng: 57.5753479 },
    Rustaq: { lat: 23.4774619, lng: 57.4490708 },
    Muscat: { lat: 23.5890724, lng: 58.4203324 },
    Sur: { lat: 22.5628929, lng: 59.4689542 },
    Ibra: { lat: 22.77637, lng: 58.4908176 },
    Ibri: { lat: 23.2423895, lng: 56.4005216 },
    Nizwa: { lat: 22.890267, lng: 57.5534627 },
    Salalah: { lat: 17.0472691, lng: 54.1401155 }
};
  
var map;
var cityMarkers = [];
var line;

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        /* Set your options here */
        center: new Microsoft.Maps.Location(23.4218, 57.4231), // Centered in Oman
        zoom: 7
    });

    // Add city markers
    Object.keys(cities).forEach(function(city) {
        var location = new Microsoft.Maps.Location(cities[city].lat, cities[city].lng);
        var marker = new Microsoft.Maps.Pushpin(location, {
            title: city
        });
        cityMarkers[city] = marker;
        map.entities.push(marker);
    });
}

  
// Haversine function in JavaScript
function haversine(lat1, lon1, lat2, lon2) {
    // Radius of the Earth in kilometers (km)
    var R = 6371;

    // Convert degrees to radians
    var rlat1 = lat1 * (Math.PI/180); // Convert latitude from degrees to radians
    var rlat2 = lat2 * (Math.PI/180); // Convert longitude from degrees to radians

    // Difference in coordinates
    var dlat = (lat2-lat1) * (Math.PI/180);
    var dlon = (lon2-lon1) * (Math.PI/180);

    // Haversine formula
    var a = Math.sin(dlat/2) * Math.sin(dlat/2) +
            Math.cos(rlat1) * Math.cos(rlat2) *
            Math.sin(dlon/2) * Math.sin(dlon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    // Distance in kilometers
    var distance = R * c;

    return distance;
}

  
// Event listeners for select boxes and button
document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM fully loaded and parsed");

    //initMap();
  
    // When the "Find Distance" button is clicked
    document.getElementById('findDistance').addEventListener('click', function() {

    console.log("Find Distance clicked");

      // Get the selected cities' values
      var city1Value = document.getElementById('city1').value;
      var city2Value = document.getElementById('city2').value;
      
      // Split the values into latitude and longitude and convert them to numbers
      var [lat1, lon1] = city1Value.split(',').map(Number);
      var [lat2, lon2] = city2Value.split(',').map(Number);
      
      // Calculate the distance
      var distance = haversine(lat1, lon1, lat2, lon2);
      
      // Get the city names from the selected options for displaying
      var city1Name = document.getElementById('city1').selectedOptions[0].text;
      var city2Name = document.getElementById('city2').selectedOptions[0].text;
      
      // Update the output label
      document.getElementById('output').textContent = `Distance from ${city1Name} to ${city2Name} is ${Math.round(distance)} KMs`;
      
      // Update the map view
      updateMapAndMarkers(city1Name, city2Name);
    });
  });
  
function updateMapAndMarkers(city1, city2) {
    // Clear existing line
    if (line) {
        map.entities.remove(line);
    }

    // Reset marker icons (Bing Maps might require a different approach or just re-adding markers)
    cityMarkers.forEach(marker => map.entities.remove(marker));
    cityMarkers.forEach(marker => map.entities.push(marker));

    // Highlight selected cities (Bing Maps does not directly support changing the icon color, so you might need custom icons)
    // For demonstration, we're just re-adding these markers

    // Draw a line between them
    var location1 = new Microsoft.Maps.Location(cityMarkers[city1].getLocation().latitude, cityMarkers[city1].getLocation().longitude);
    var location2 = new Microsoft.Maps.Location(cityMarkers[city2].getLocation().latitude, cityMarkers[city2].getLocation().longitude);

    line = new Microsoft.Maps.Polyline([location1, location2], {
        strokeColor: 'red',
        strokeThickness: 2
    });
    map.entities.push(line);
}

