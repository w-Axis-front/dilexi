// Main JS module
import $ from "jquery";
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import scrollContent from "./modules/scrollContent";

$(function() {
  objectFitImages();
  scrollContent();
});
