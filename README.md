# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Task description
This project contains example data source in `assets/data.json`.
This file has simple array data structure.

Example project includes already service which accesses data from the file and displays it in simple way in HTML template.
Task for developer is to **implement cart functionality** which includes:
* Adding *add* button in each card cart
* Adding cart button on toolbar which will display on badge number of added products
* Creating cart component - as a panel, popup, dialog which will open on cart button click
* Handling storage of data - when user clicks *add* product count should be updated
* Adding option in cart to remove products from it
* Calculating in cart total price
