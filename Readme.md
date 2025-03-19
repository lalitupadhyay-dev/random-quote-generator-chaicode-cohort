# Random Quote Generator

This project is a **Random Quote Generator** web application that fetches random quotes and displays them with a background image. Users can generate new quotes, copy them to the clipboard, share them on Twitter, or export the quote.

## Project Structure

### Files Overview

#### 1. [index.html](index.html)
The main HTML file that defines the structure of the web application. It includes:
- A header with the title "Random Quote Generator".
- A main section with the quote display area and buttons for user interactions.
- A footer with attribution.

#### 2. CSS Files
- **[src/css/style.css](src/css/style.css)**: Contains the main styles for the application, including layout, colors, and animations.
- **[src/css/utilities.css](src/css/utilities.css)**: Contains utility classes for common styles like `.none` (to hide elements) and `.flex-1` (for centering content).

#### 3. JavaScript Files
- **[src/js/constants.js](src/js/constants.js)**:
  - Stores API URLs for fetching quotes and sharing on Twitter.
  - Example:
    ```javascript
    export const QUOTE_API = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
    ```

- **[src/js/data.js](src/js/data.js)**:
  - Exports references to DOM elements (`refs`), a list of background images (`images`), and global variables (`globals`).
  - Example:
    ```javascript
    export const refs = {
      body: document.querySelector("body"),
      loader: document.querySelector(".loader"),
      // ...
    };
    ```

- **[src/js/handlers.js](src/js/handlers.js)**:
  - Contains event handler functions for user interactions like generating a new quote, copying to clipboard, sharing on Twitter, and exporting.
  - Example:
    ```javascript
    const handlers = {
      newQuoteBtn: async function () {
        utils.startLoader();
        utils.loadImage();
        const response = await utils.fetchQuote();
        utils.renderQuote(response);
      },
    };
    ```

- **[src/js/main.js](src/js/main.js)**:
  - Initializes the application and attaches event listeners to buttons.
  - Example:
    ```javascript
    refs.newQuoteBtn.addEventListener("click", handlers.newQuoteBtn);
    ```

- **[src/js/utils.js](src/js/utils.js)**:
  - Contains utility functions for initializing the app, fetching quotes, rendering quotes, managing the loader, and loading background images.
  - Example:
    ```javascript
    const utils = {
      fetchQuote: async function () {
        try {
          const response = await fetch(QUOTE_API, { method: "GET" });
          const json = await response.json();
          return { success: true, data: { ...json.data } };
        } catch (error) {
          return { success: false, message: "Sorry, something went wrong!!" };
        }
      },
    };
    ```

#### 4. Images
- **[src/imgs/](src/imgs/)**: Contains custom cursor images for buttons:
  - `copy.png`: Cursor for the "Copy to Clipboard" button.
  - `export.png`: Cursor for the "Export" button.
  - `new.png`: Cursor for the "New Quote" button.
  - `twitter.png`: Cursor for the "Share on Twitter" button.

## Features
- Fetches random quotes from an API.
- Displays quotes with a random background image.
- Allows users to:
  - Generate a new quote.
  - Copy the quote to the clipboard.
  - Share the quote on Twitter.
  - Export the quote (feature to be implemented).

## How to Run
1. Clone the repository.
2. Open `index.html` in a browser.
3. Interact with the buttons to generate quotes, copy, share, or export.

## Future Enhancements
- Implement the "Export" feature in the `exportImage` function in [handlers.js](src/js/handlers.js).
- Add a dark mode toggle.
- Improve error handling for API requests.

## License
This project is for educational purposes as part of the ChaiCode Web Development Cohort.
