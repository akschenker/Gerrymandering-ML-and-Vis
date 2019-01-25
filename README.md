# Gerrymandering-ML-and-Vis

## About the Project

I used data from the Census, FiveThirtyEight, and the UCLA Political Science department to create several analyses related to [gerrymandering](https://en.wikipedia.org/wiki/Gerrymandering). I felt this was a worthy endeavor because gerrymandering is a difficult problem to solve, as well as having lots of data associated with it. This analysis does not attempt to solve gerrymandering; rather, it aims to identify trends of current congressional districts and visualize changes in district boundaries throughout the decades.

The project currently includes an interactive Leaflet map showing the changes in congressional district lines for each decade between 1960 and 2010. On the index page, the project also shows correlation graphs between several gerrymandering metrics and demographic data.

![District maps from 1959-2011](/static/images/LeafletFull.png "Map")

In the future, a machine learning algorithm will be implemented to predict the extent of gerrymandering of a district from its demographic information and district boundary information. The app will also be deployed to Heroku using Flask/SQL.

## Installation and Usage

The app must be run with a local server. This can either be accomplished with the Live Server extension in Visual Studio code or the line `python -m http.server` in a Terminal window.

## Tools Used

* Javascript (d3, Leaflet)
* Python (Pandas, Matplotlib)
* HTML/CSS

## Data Sources

* [FiveThirtyEight Analysis](https://github.com/fivethirtyeight/redistricting-atlas-data)
* [UCLA Polisci District Shapefiles](http://cdmaps.polisci.ucla.edu/)

## Author

Arley Schenker