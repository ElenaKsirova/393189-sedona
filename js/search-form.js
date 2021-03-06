'use strict';

(function () {
  var searchOpenButton = document.querySelector('.search-open-button');

  var searchFormWrapper = document.querySelector('.search-form-wrapper-for-animation');
  var searchForm = document.querySelector('.search-form');

  var checkIn = document.querySelector('#check-in');
  var checkOut = document.querySelector('#check-out');

  searchOpenButton.addEventListener('click', function (evt) {
    if (searchForm.classList.contains('visually-hidden')) {
      searchFormWrapper.classList.remove('visually-hidden');
      searchForm.classList.remove('visually-hidden');
      searchForm.classList.add('modal-show');

      setTimeout(function () { searchForm.classList.remove('modal-show'); }, 1000);
    } else {
      searchFormWrapper.classList.add('visually-hidden');
      searchForm.classList.add('visually-hidden');
      searchForm.classList.remove('modal-show');
      searchForm.classList.remove('modal-error');
    }

    evt.preventDefault();
  });


  searchForm.addEventListener('submit', function (evt) {
    if (!checkIn.value || !checkOut.value) {
      evt.preventDefault();

      searchForm.classList.add('modal-error');

      setTimeout(function () { searchForm.classList.remove('modal-error'); }, 1000);
    } else {
      searchForm.classList.remove('modal-error');
    }
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
