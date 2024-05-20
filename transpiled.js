"use strict";

$(document).ready(function () {
  var previousButton = document.querySelector(".previous-button img");
  var nextButton = document.querySelector(".next-button img");
  var previousButtonSrc = {
    "default": "../Assets/arrow-gray-left.png",
    hover: "../Assets/arrow-blue-left.png"
  };
  var nextButtonSrc = {
    "default": "../Assets/arrow-gray-right.png",
    hover: "../Assets/arrow-blue-right.png"
  };
  var addHoverEffect = function addHoverEffect(button, src) {
    button.parentElement.addEventListener("mouseenter", function () {
      button.src = src.hover;
    });
    button.parentElement.addEventListener("mouseleave", function () {
      button.src = src["default"];
    });
  };
  addHoverEffect(previousButton, previousButtonSrc);
  addHoverEffect(nextButton, nextButtonSrc);
  var slides = $('.image');
  var totalSlides = slides.length;
  var slideWidth = slides.first().width() + 10;
  var currentIndex = 0;
  var updateSlidePosition = function updateSlidePosition() {
    var newPosition = -currentIndex * slideWidth;
    slides.css('transform', "translateX(".concat(newPosition, "px)"));
  };
  var getNextIndex = function getNextIndex(current) {
    return (current + 1) % totalSlides;
  };
  var getPreviousIndex = function getPreviousIndex(current) {
    return (current - 1 + totalSlides) % totalSlides;
  };
  var showSlide = function showSlide(index) {
    currentIndex = index;
    updateSlidePosition();
  };
  $('.previous-button').on('click', function () {
    var prevIndex = getPreviousIndex(currentIndex);
    slides.animate({
      transform: "translateX(-".concat(prevIndex * slideWidth, "px)")
    }, 500);
    showSlide(prevIndex);
  });
  $('.next-button').on('click', function () {
    var nextIndex = getNextIndex(currentIndex);
    slides.animate({
      transform: "translateX(-".concat(nextIndex * slideWidth, "px)")
    }, 500);
    showSlide(nextIndex);
  });
  showSlide(currentIndex);
});
