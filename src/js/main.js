import handlers from "./handlers.js";
import {refs} from "./data.js";
import utils from "./utils.js";

// Initializes the app
utils.init();
utils.fetchQuote();

// Attaching the handlers
refs.newQuoteBtn.addEventListener("click", handlers.newQuoteBtn);
refs.copyToClipboardBtn.addEventListener("click", handlers.copyToClipboard);
refs.shareTwitterBtn.addEventListener("click", handlers.shareToTwitter);
refs.exportBtn.addEventListener("click", handlers.exportImage); 