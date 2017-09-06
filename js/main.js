'use strict';

(function () {
  var searchOpenButton = document.querySelector('.search-open-button');
  var searchForm = document.querySelector('.search-form');

  searchOpenButton.addEventListener('click', function (evt) {
    searchForm.classList.toggle('visually-hidden');

    evt.preventDefault();
  });
})();
