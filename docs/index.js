/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener("DOMContentLoaded", function () {
  handleFilter();
  handleTests();
  mobileMenu();
  copyLink();
});

function handleFilter() {
  var filterButtons = document.querySelectorAll('.A_Filter');
  var articles = document.querySelectorAll('.MainCardArticle, .O_CardArticle, .O_CardRecipe, .O_CardLargeRecipe, .O_CardGrib, .O_CardLargeGrib');
  var cardContainer = document.querySelector('.S_CardsArticle');
  var photoArticles = document.querySelectorAll('.A_PhotoArticle'); // Устанавливаем начальный фильтр

  applyFilter('all');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      applyFilter(filter); // Изменяем классы кнопок при клике

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active'); // Изменяем flex-direction в зависимости от фильтра

      if (filter === 'all') {
        cardContainer.style.flexDirection = 'column';
      } else {
        cardContainer.style.flexDirection = 'row';
      } // Изменяем высоту картинки в зависимости от фильтра


      photoArticles.forEach(function (photo) {
        if (filter === 'all') {
          photo.style.height = 'auto';
        } else {
          photo.style.height = '28vw';
        }
      });
    });
  });

  function applyFilter(filter) {
    articles.forEach(function (article) {
      if (filter === 'all' || article.classList.contains(filter)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

function handleTests() {
  var currentQuestion = 0;
  var score = 0;
  var questions = document.querySelectorAll('.O_TestQuestion');
  var totalQuestions = questions.length;
  questions.forEach(function (question, i) {
    var answers = question.querySelectorAll('.A_TestAnswer');
    answers.forEach(function (answer) {
      answer.addEventListener('click', function (e) {
        var isCorrect = answer.classList.contains('correct');

        if (isCorrect) {
          score++;
          answer.classList.add('green');
        } else {
          answer.classList.add('red');
          var correctAnswer = question.querySelector('.A_TestAnswer.correct');
          correctAnswer.classList.add('green');
        }

        answers.forEach(function (ans) {
          return ans.style.pointerEvents = 'none';
        });
      });
    });
    var nextButton = question.querySelector('#Q_NextQuestion');
    var prevButton = question.querySelector('#Q_PreviousQuestion');
    nextButton && nextButton.addEventListener('click', function (e) {
      currentQuestion++;
      updateQuestion();
    });
    prevButton && prevButton.addEventListener('click', function (e) {
      currentQuestion--;
      updateQuestion();
    });
  });
  var finishButton = document.querySelector('#Q_FinishTest');
  finishButton && finishButton.addEventListener('click', function (e) {
    var testResults = document.querySelector('.O_TestResults');
    questions[currentQuestion].style.display = 'none';
    testResults.style.display = 'flex';
    showResults();
  });

  function showResults() {
    var result = document.querySelector('#Q_TestResult');
    var percentage = Math.round(score / totalQuestions * 100);
    result.textContent = "".concat(percentage, "%");
  }

  updateQuestion();

  function updateQuestion() {
    questions.forEach(function (question, i) {
      if (i === currentQuestion) {
        question.style.display = 'flex';
      } else {
        question.style.display = 'none';
      }
    });
  }
}

function mobileMenu() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menuContainer = document.querySelector('.O_MobileMenubar');
  menuToggle.addEventListener('click', function () {
    menuContainer.classList.toggle('open');
  });
}

function copyLink() {
  var currentPageUrl = encodeURIComponent(window.location.href); // Кодируем URL текущей страницы

  var telegramShareButton = document.querySelector('.shareTelegram');
  var vkShareButton = document.querySelector('.shareVK');
  telegramShareButton.addEventListener('click', function () {
    var telegramUrl = "https://telegram.me/share/url?url=".concat(currentPageUrl);
    window.open(telegramUrl, '_blank'); // Открываем в новом окне
  });
  vkShareButton.addEventListener('click', function () {
    var vkUrl = "https://vk.com/share.php?url=".concat(currentPageUrl);
    window.open(vkUrl, '_blank'); // Открываем в новом окне
  });
}
/******/ })()
;