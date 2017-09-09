'use strict';

(function () {
  var searchOpenButton = document.querySelector('.search-open-button');
  var searchForm = document.querySelector('.search-form');

  searchOpenButton.addEventListener('click', function (evt) {
    searchForm.classList.toggle('visually-hidden');

    evt.preventDefault();
  });


  var adultsNumber = document.querySelector('#adults');

  var plusAdultsButton = document.querySelector('.plus-adults');
  var minusAdultsButton = document.querySelector('.minus-adults');

  plusAdultsButton.addEventListener('click', function () {
    adultsNumber.value++;
  });

  minusAdultsButton.addEventListener('click', function () {
    if (adultsNumber.value > 0) {
      adultsNumber.value--;
    }
  });


  var childrenNumber = document.querySelector('#children');

  var plusChildrenButton = document.querySelector('.plus-children');
  var minusChildrenButton = document.querySelector('.minus-children');


  plusChildrenButton.addEventListener('click', function () {
    childrenNumber.value++;
  });

  minusChildrenButton.addEventListener('click', function () {
    if (childrenNumber.value > 0) {
      childrenNumber.value--;
    }
  });
})();
