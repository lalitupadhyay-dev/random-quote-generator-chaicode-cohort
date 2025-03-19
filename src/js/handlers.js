import { TWITTER_SHARE_API } from "./constants.js";
import { globals, refs } from "./data.js";
import utils from "./utils.js";

const handlers = {
  newQuoteBtn: async function () {
    utils.startLoader();
    utils.loadImage();
    const response = await utils.fetchQuote();
    utils.renderQuote(response);
  },
  copyToClipboard: async function () {
    try {
      await navigator.clipboard.writeText(
        `${globals.quoteText} ${globals.author}`
      );
    } catch (error) {
      console.log(error);
    }
  },
  shareToTwitter: async function () {
    const anchor = document.createElement("a");
    anchor.target = "_blank";
    anchor.href = `${
      TWITTER_SHARE_API + (globals.quoteText + " " + "Author - " + globals.author)
    }`;
    anchor.click();
  },
  exportImage: async function () {
    html2canvas(refs.quoteExportImage).then(function (canvas) {
      const imageUrl = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = imageUrl;
      anchor.download = "quote-img.png";
      anchor.click();
    });
  },
};

export default handlers;
