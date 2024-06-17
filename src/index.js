import './index.css'

document.addEventListener("DOMContentLoaded", function() {
  handleFilter();
  handleTests();
  mobileMenu();
  copyLink();
});


function handleFilter() {
  const filterButtons = document.querySelectorAll('.A_Filter');
  const articles = document.querySelectorAll('.MainCardArticle, .O_CardArticle, .O_CardRecipe, .O_CardLargeRecipe, .O_CardGrib, .O_CardLargeGrib');
  const cardContainer = document.querySelector('.S_CardsArticle');
  const photoArticles = document.querySelectorAll('.A_PhotoArticle');

  // Устанавливаем начальный фильтр
  applyFilter('all');

  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const filter = button.getAttribute('data-filter');
      applyFilter(filter);
      // Изменяем классы кнопок при клике
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      // Изменяем flex-direction в зависимости от фильтра
      if (filter === 'all') {
        cardContainer.style.flexDirection = 'column';
      } else {
        cardContainer.style.flexDirection = 'row';
      }
      // Изменяем высоту картинки в зависимости от фильтра
      photoArticles.forEach(function(photo) {
        if (filter === 'all') {
          photo.style.height = 'auto';
        } else {
          photo.style.height = '28vw';
        }
      });
    });
  });

  function applyFilter(filter) {
    articles.forEach(function(article) {
      if (filter === 'all' || article.classList.contains(filter)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

function handleTests() {
  let currentQuestion = 0;
  let score = 0;
  const questions = document.querySelectorAll('.O_TestQuestion');
  const totalQuestions = questions.length;

  questions.forEach((question, i) => {
    const answers = question.querySelectorAll('.A_TestAnswer');
    answers.forEach(answer => {
      answer.addEventListener('click', (e) => {
        const isCorrect = answer.classList.contains('correct');
        if (isCorrect) {
          score++;
          answer.classList.add('green');
        } else {
          answer.classList.add('red');
          const correctAnswer = question.querySelector('.A_TestAnswer.correct');
          correctAnswer.classList.add('green');
        }
        answers.forEach(ans => ans.style.pointerEvents = 'none');
      });
    });

    const nextButton = question.querySelector('#Q_NextQuestion');
    const prevButton = question.querySelector('#Q_PreviousQuestion');

    nextButton && nextButton.addEventListener('click', (e) => {
      currentQuestion++;
      updateQuestion();
    });

    prevButton && prevButton.addEventListener('click', (e) => {
      currentQuestion--;
      updateQuestion();
    });
  });

  const finishButton = document.querySelector('#Q_FinishTest');

  finishButton && finishButton.addEventListener('click', (e) => {
    const testResults = document.querySelector('.O_TestResults');
    questions[currentQuestion].style.display = 'none';
    testResults.style.display = 'flex';
    showResults();
  });

  function showResults() {
    const result = document.querySelector('#Q_TestResult');
    const percentage = Math.round(score / totalQuestions * 100);
    result.textContent = `${percentage}%`;
  }

  updateQuestion();

  function updateQuestion() {
    questions.forEach((question, i) => {
      if (i === currentQuestion) {
        question.style.display = 'flex';
      } else {
        question.style.display = 'none';
      }
    });
  }
}

function mobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContainer = document.querySelector('.O_MobileMenubar');

  menuToggle.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
  });
}

function copyLink() {
  const currentPageUrl = encodeURIComponent(window.location.href); // Кодируем URL текущей страницы

  const telegramShareButton = document.querySelector('.shareTelegram');
  const vkShareButton = document.querySelector('.shareVK');

  telegramShareButton.addEventListener('click', () => {
    const telegramUrl = `https://telegram.me/share/url?url=${currentPageUrl}`;
    window.open(telegramUrl, '_blank'); // Открываем в новом окне
  });

  vkShareButton.addEventListener('click', () => {
    const vkUrl = `https://vk.com/share.php?url=${currentPageUrl}`;
    window.open(vkUrl, '_blank'); // Открываем в новом окне
  });
}



