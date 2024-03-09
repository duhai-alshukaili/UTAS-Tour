# UTAS Tour Distance Finder

## Description

The UTAS Tour Distance Finder is a web application designed to calculate and display the straight-line distance between two cities in Oman. Utilizing Bing Maps, the application offers an interactive map view, marking the location of 11 key cities across the country. Users can select two cities from dropdown menus, and upon clicking the "Find Distance" button, the application calculates the distance using the Haversine formula, highlights the selected cities on the map, and draws a dotted line between them to visually represent the distance.

## Features

- Interactive Bing Maps integration
- Selection of cities via dropdown menus
- Calculation of straight-line distance using the Haversine formula
- Visual representation of the selected cities and the distance between them on the map

## Distance Calculation Method

The application uses the Haversine formula to calculate the great-circle distance between two points on the earth's surface, given their latitude and longitude. This method accounts for the spherical shape of the earth and provides an accurate measurement of the distance between two geographic locations.

## Project Setup

### Prerequisites

- A Bing Maps Key obtained from the [Bing Maps Portal](https://www.bingmapsportal.com/).

### Including Bing Maps API

Include the Bing Maps script in the `<head>` section of your HTML file, replacing `Your_Bing_Maps_Key` with your actual API key:

```html
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?key=Your_Bing_Maps_Key&callback=loadMapScenario' async defer></script>
```

### Initialization Function

Define a `loadMapScenario` function in your JavaScript file to initialize the map and add markers for each city:

```javascript
var map;
var cityMarkers = [];

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        center: new Microsoft.Maps.Location(23.4218, 57.4231),
        zoom: 7
    });

    // Add markers for each city
}
```

### Update Map and Markers

Implement functionality to update the map view based on the user's selections, including highlighting selected cities and drawing a line between them.

## Additional References

- [Bing Maps V8 Web Control Documentation](https://docs.microsoft.com/en-us/bingmaps/v8-web-control/)
- [Bing Maps Dev Center](https://www.bingmapsportal.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

## License

This project is licensed under the Apache License, Version 2.0 - see the LICENSE.md file for details.

