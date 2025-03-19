# Random Quote Generator

This project is a **Random Quote Generator** web application that displays random quotes with a background image. Users can generate new quotes, copy them to the clipboard, share them on Twitter, or export the quote as image.

---

## Table of Contents
1. [Features](#features)
2. [Project-Structure](#project-structure)
3. [License](#license)

---

## Features

- Fetches random quotes from an API.
- Displays quotes with a random background image.
- Allows users to:
  - Generate a new quote.
  - Copy the quote to the clipboard.
  - Share the quote on Twitter.
  - Export the quote (feature to be implemented).

---

## Project Structure

### index.html
This file is the entry point of the application.

### readme.md
This file contains the documentation of the application

### src
This is a folder that contains design, logic, and images related to the application

  - #### css
  This folder contains the css files for styling the application.

    - ##### style.css
    This file contais all the css rules that are applied to the application.
  
  - #### imgs
  This folder contains images related to the system

    - {copy.png, export.png, new.png, twitter.png} are the icons.
    - "quote-background" folder contains the images that are appearing behind the quote.
  
  - #### js 
  This folder contains all the JavaScript files that contain the logic related to the application.

    - ##### constants.js
    This file contains the APIs.

    - ##### data.js
    This file contains the data that is required at run time of the application.

    - ##### handlers.js
    This file contains all the handler functions that will be triggered when any event like "click" is occured.

    - ##### main.js
    This file is the entry point for scripts (I am following "moduleJS" pattern).

    - ##### utils.js
    This file contain utility functions.

---

## License
This project is for educational purposes as part of the ChaiCode Web Development Cohort Assignment.