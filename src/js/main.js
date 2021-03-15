// Main JS module
import $ from "jquery";
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import nav from "./modules/nav";
import scrollContent from "./modules/scrollContent";
import countTime from "./modules/countTime";

$(function() {
  objectFitImages();
  nav();
  scrollContent();
  countTime();
});
