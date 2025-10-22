# Chef Menu App

A menu application that allows users to view the current offerings of the chef.

## Kgomotso Mbele

ST10467825

kgomotsombele@outlook.com

Repository link: [(https://github.com/KgomotsoMbele/ST10467825-ChefMenuApp)]

Module: MAST5112 — Mobile Application Scripting

## Project Overview

The app demonstrates understanding of UI design principles and state management in React Native, with dynamically loaded data.
The application also allows the chef to add and remove items from the menu swiftly and easily.

## Goals and Objectives

## Features

🧱 Dynamic data rendering (data is loaded at runtime)

💾 Temporary state management using React hooks

🎨 Intuitive and responsive UI elements designed for mobile screens

🧭 Navigation between screens

⚙️ Form handling and user interaction

## Changelog

- Version 1.0

  Created the application and initialised it. For some reason, my first project stopped working
  and no longer accepted commands so now I have to start again last minute.
  Just made the bare mininmum application using blank template and committed.

- Version 1.1

  Created the base app structure and started setting up the functional components that will be used.
  Added a `SafeAreaView` and `StatusBar` to make my UI layout more consistent for all devices.
  Ran into some issues regarding my imports but go that sorted by changing to a more updated import
  that supports iOS better as well. I added some foundational TS definitions for type safety and scaling.

- Version 1.2

  Implemented the main functionality for the home screen by adding a fully controlled form that allows the chef to input new menu items dynamically. Set up individual state variables(`useState`) to capture the dish name, description, course, and price. Added logic to validate input fields and store each new item inside an array. Created a `FlatList` to render the list of menu items in real time and display the total number of dishes currently on the menu. Ensured that all the fields reset after submission for better usability.

- Version 1.3

  Added logic to calculate and display item counts by category (Starters, Mains, Desserts) dynamically on the home screen. Implemented `.filter()` based counting for each course type to improve menu visibility for the chef. Updated the layout as well to show category specific stats. Used a dropdown and `picker` to avoid input errors if users don't put in the exact syntax and wording for the course type.

## Installation and setup

1. Clone this repository:
   `git clone https://github.com/KgomotsoMbele/ST10467825-ChefMenuApp`
2. Navigate to the project repository:
   `cd ST10467825-ChefMenuApp`
3. Install dependencies:
   `npm install`
4. Run the app:
   `npx react-native run-android`
   or for iOS
   `npx react-native run-iOS`

## References
