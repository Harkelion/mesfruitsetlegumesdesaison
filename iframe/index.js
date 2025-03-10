import { iframeResize } from "iframe-resizer";

const script = document.getElementById("datagir-fruits-et-legumes");

const domain = script.dataset.domain;
const search = script.dataset.search;
//const theme = script.dataset.theme
//const title = script.dataset.title
const source = window.location.href.toString();

const src = `${
  domain || "https://fruit-legume-saison-sevadec.netlify.app"
}/embed${search}${search.includes("?") ? "&" : "?"}source=${source}`;

const iframe = document.createElement("iframe");

const iframeAttributes = {
  src,
  id: "datagir-fruits-et-legumes-iframe",
  style: "border: none; width: 100%; display: block; margin: 0 auto;",
  allowfullscreen: true,
  webkitallowfullscreen: true,
  mozallowfullscreen: true,
};
for (var key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key]);
}
iframeResize({}, iframe);

script.parentNode.insertBefore(iframe, script);
