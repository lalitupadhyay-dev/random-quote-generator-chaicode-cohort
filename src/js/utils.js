import { QUOTE_API } from "./constants.js";
import { globals, images, refs } from "./data.js";

const utils = {
  init: async function () {
    utils.startLoader();
    utils.loadImage();
    const response = await utils.fetchQuote();
    utils.renderQuote(response);
  },

  fetchQuote: async function () {
    try {
      const response = await fetch(QUOTE_API, {
        method: "GET",
      });
      const json = await response.json();
      return {
        success: true,
        data: { ...json.data },
      };
    } catch (error) {
      return {
        success: false,
        message: "Sorry, something went wrong!!",
      };
    }
  },

  renderQuote: function (response) {
    if (response.success) {
      globals.quoteText = `"${response.data.content}"`;
      globals.author = response.data.author;

      refs.quoteError.classList.add("none");
      refs.quote.classList.remove("none");
      refs.author.classList.remove("none");
      refs.quote.textContent = globals.quoteText;
      refs.author.textContent = `Author - ${globals.author}`;
    } else {
      refs.quoteError.classList.remove("none");
      refs.quote.classList.add("none");
      refs.author.classList.add("none");
      refs.quoteError.textContent = response.message;
    }
    utils.stopLoader();
  },

  loadImage: function () {
    globals.currImageIndex = globals.currImageIndex % globals.totalImages;
    refs.quoteBackgroundImage.src = images[globals.currImageIndex];
    globals.currImageIndex += 1;
  },

  startLoader: function () {
    refs.loader.classList.remove("none");
  },
  stopLoader: function () {
    refs.loader.classList.add("none");
  },
};

export default utils;
