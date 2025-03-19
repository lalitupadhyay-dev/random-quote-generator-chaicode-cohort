export const refs = {
  body: document.querySelector("body"),
  loader: document.querySelector(".loader"),
  quote: document.querySelector(".quote"),
  author: document.querySelector(".author"),
  quoteError: document.querySelector(".quote-error"),
  quoteBackgroundImage: document.querySelector(".quote-background-image"),
  quoteExportImage: document.querySelector("#quote-export-img"),
  newQuoteBtn: document.querySelector(".new-quote-btn"),
  copyToClipboardBtn: document.querySelector(".copy-clipboard-btn"),
  shareTwitterBtn: document.querySelector(".share-twitter-btn"),
  exportBtn: document.querySelector(".export-btn"),
};

export const images = [
  "./src/imgs/quote-backgrounds/1.webp",
  "./src/imgs/quote-backgrounds/2.webp",
  "./src/imgs/quote-backgrounds/3.webp",
  "./src/imgs/quote-backgrounds/4.webp",
  "./src/imgs/quote-backgrounds/5.webp",
  "./src/imgs/quote-backgrounds/6.webp",
  "./src/imgs/quote-backgrounds/7.webp",
  "./src/imgs/quote-backgrounds/8.webp",
  "./src/imgs/quote-backgrounds/9.webp",
  "./src/imgs/quote-backgrounds/10.webp",
  "./src/imgs/quote-backgrounds/11.webp",
  "./src/imgs/quote-backgrounds/12.webp",
  "./src/imgs/quote-backgrounds/13.webp",
  "./src/imgs/quote-backgrounds/14.webp",
  "./src/imgs/quote-backgrounds/15.webp",
  "./src/imgs/quote-backgrounds/16.webp",
];

export const globals = {
  totalImages: images.length,
  currImageIndex: 0,
  quoteText: "",
  author: "",
};
