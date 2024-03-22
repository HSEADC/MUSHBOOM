import './index.css'


  document.addEventListener("DOMContentLoaded", function() {
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
    
  });
  
  



  const searchInput = document.getElementById('Q_SearchField');
  const searchResults = document.getElementById('C_SearchResults');
  
  // Массив с вариантами результатов поиска
  const searchOptions = [
    "Angels Wings — самые лучшие леса для правильного поиска | Статья",
    "Белый гриб | ГрибВики",
    "Бледная поганка | ГрибВики",
    "Волнушка | ГрибВики",
    "Галерина окаймлённая | ГрибВики",
    "Грибная безопасность | Тест",
    "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья",
    "Грибной страх | Памятка",
    "Груздь | ГрибВики",
    "Жареные шампиньоны | Рецепт",
    "Как выбрать экипировку? | Статья",
    "Как привить детям любовь к грибным походам? | Статья",
    "Календарь грибной охоты | Тест",
    "Китайские брокколи | Рецепт",
    "Лисичка | ГрибВики",
    "Ложная лисичка | ГрибВики",
    "Ложный боровик | ГрибВики",
    "Ложный подберёзовик | ГрибВики",
    "Ложный подосиновик | ГрибВики",
    "Ложный опёнок | ГрибВики",
    "Маслёнок | ГрибВики",
    "Мухомор | ГрибВики",
    "Наборы для выращивания Pink Oyster | Статья",
    "Одежда грибника | Памятка",
    "Опёнок | ГрибВики",
    "Подберёзовик | ГрибВики",
    "Подосиновик | ГрибВики",
    "Путь грибника | Памятка",
    "Рыжик | ГрибВики",
    "Самые практичные дождевики для грибных походов | Статья",
    "Свинушка | ГрибВики",
    "Сморчок | ГрибВики",
    "Съедобный или ядовитый | Тест",
    "Тихая охота (Топ-5 правил) | Статья",
    "Timberland x Nina Chanel — свежий выбор для грибников? | Статья",
    "Toxic Mush | Памятка",
    "Феттучини | Рецепт",
    "Шампиньон | ГрибВики"
    // Добавлять сюда все варианты результатов поиска
  ];
  
  // Функция для обновления результатов поиска при вводе текста в поле
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
  
    // Очищает предыдущие результаты поиска
    searchResults.innerHTML = '';
  
    // Фильтрует варианты поиска в соответствии с введенным текстом
    const filteredOptions = searchOptions.filter(option =>
      option.trim().toLowerCase().startsWith(searchTerm)
    );
  
    // Отображает найденные результаты
  filteredOptions.forEach(option => {
  const resultItem = document.createElement('a');
  const url = getPageUrl(option);
  resultItem.href = url;
  resultItem.textContent = option;
  searchResults.appendChild(resultItem);
  });

// Функция для возврата URL-адреса страницы для каждой позиции
function getPageUrl(option) {
  // Возвращает URL-адрес страницы для каждой позиции
  if (option === 'Как выбрать экипировку? | Статья') {
    return 'articles/ekipirovka.html';
  } 
  else if (option === 'Феттучини | Рецепт') {
    return 'recipes/fettuchini.html';
  } 
  else if (option === 'Toxic Mush | Памятка') {
    return 'memos/toxic_mush.html';
  } 
  else if (option === 'Одежда грибника | Памятка') {
    return 'memos/odezhda_gribnika.html';
  } 
  else if (option === 'Грибной страх | Памятка') {
    return 'memos/gribnoi_strah.html';
  } 
  else if (option === 'Путь грибника | Памятка') {
    return 'memos/puti_gribnika.html';
  } 
  else if (option === 'Самые практичные дождевики для грибных походов | Статья') {
    return 'articles/dozhdeviki.html';
  } 
  else if (option === 'Наборы для выращивания Pink Oyster | Статья') {
    return 'articles/pink_oyster.html';
  } 
  else if (option === 'Angels Wings — самые лучшие леса для правильного поиска | Статья') {
    return 'articles/angels_wings.html';
  } 
  else if (option === 'Как привить детям любовь к грибным походам? | Статья') {
    return 'articles/deti_i_pohodi.html';
  } 
  else if (option === 'Timberland x Nina Chanel — свежий выбор для грибников? | Статья') {
    return 'articles/timberland.html';
  } 
  else if (option === 'Грибы в искусстве: влияние на литературу, живопись и музыку | Статья') {
    return 'articles/gribi_v_iskusstve.html';
  } 
  else if (option === 'Тихая охота (Топ-5 правил) | Статья') {
    return 'articles/tihaya_ohota.html';
  } 
  else if (option === 'Жареные шампиньоны | Рецепт') {
    return 'recipes/zharenie_shampinioni.html';
  } 
  else if (option === 'Китайские брокколи | Рецепт') {
    return 'recipes/kitaiskie_brokkoli.html';
  } 
  else if (option === 'Грибная безопасность| Тест') {
    return 'tests/gribnaya_bezopasnost.html';
  } 
  else if (option === 'Календарь грибной охоты | Тест') {
    return 'tests/kalendar.html';
  } 
  else if (option === 'Съедобный или ядовитый | Тест') {
    return 'tests/sedobnie_ili_yadovitie.html';
  } 
  else if (option === 'Белый гриб | ГрибВики') {
    return 'gribwiki/beliy_grib.html';
  } 
  else if (option === 'Лисичка | ГрибВики') {
    return 'gribwiki/zolotie_lisichki.html';
  } 
  else if (option === 'Сморчок | ГрибВики') {
    return 'gribwiki/smorchok.html';
  } 
  else if (option === 'Подосиновик | ГрибВики') {
    return 'gribwiki/podosinovik.html';
  } 
  else if (option === 'Ложный подберёзовик | ГрибВики') {
    return 'gribwiki/lozhniy_podberezovik.html';
  } 
  else if (option === 'Бледная поганка | ГрибВики') {
    return 'gribwiki/blednaya_poganka.html';
  } 
  else if (option === 'Опёнок | ГрибВики') {
    return 'gribwiki/openok.html';
  } 
  else if (option === 'Груздь | ГрибВики') {
    return 'gribwiki/gruzd.html';
  } 
  else if (option === 'Мухомор | ГрибВики') {
    return 'gribwiki/muhomor.html';
  } 
  else if (option === 'Шампиньон | ГрибВики') {
    return 'gribwiki/shampinion.html';
  } 
  else if (option === 'Ложный опёнок | ГрибВики') {
    return 'gribwiki/lozhniy_openok.html';
  } 
  else if (option === 'Ложная лисичка | ГрибВики') {
    return 'gribwiki/lozhnaya_lisichka.html';
  } 
  else if (option === 'Галерина окаймлённая | ГрибВики') {
    return 'gribwiki/galerina_okaimlennaya.html';
  } 
  else if (option === 'Ложный подосиновик | ГрибВики') {
    return 'gribwiki/lozhniy_podosinovik.html';
  } 
  else if (option === 'Волнушка | ГрибВики') {
    return 'gribwiki/volnushka.html';
  } 
  else if (option === 'Свинушка | ГрибВики') {
    return 'gribwiki/svinushka.html';
  } 
  else if (option === 'Рыжик | ГрибВики') {
    return 'gribwiki/rizhik.html';
  } 
  else if (option === 'Маслёнок | ГрибВики') {
    return 'gribwiki/maslenok.html';
  } 
  else if (option === 'Ложный боровик | ГрибВики') {
    return 'gribwiki/lozhniy_borovik.html';
  } 
  else if (option === 'Подберёзовик | ГрибВики') {
    return 'gribwiki/podberezovik.html';
  } 
  // Добавлять сюда другие условия
}

  
    // Показывает результаты поиска, если они есть
    if (filteredOptions.length > 0) {
      searchResults.style.display = 'flex';
    } else {
      searchResults.style.display = 'none';
    }
  });
  
  // Скрывает результаты поиска при клике вне поля поиска
  document.addEventListener('click', function(event) {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });
  
  




  const questionContainers = document.querySelectorAll('.O_TestQuestion');
  const resultContainer = document.querySelector('.O_ResultContainer');
  const questionText = document.getElementById('Q_QuestionText');
  const answers = document.querySelectorAll('.A_TestAnswer');
  const nextQuestionBtn = document.getElementById('Q_NextQuestion');
  const prevQuestionBtn = document.getElementById('Q_PreviousQuestion');


  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  
  // Добавляем обработчики событий для кнопок "Следующий вопрос", "Предыдущий вопрос" и для ответов
  nextQuestionBtn.addEventListener('click', nextQuestion);
  prevQuestionBtn.addEventListener('click', prevQuestion);
  answers.forEach(answer => answer.addEventListener('click', selectAnswer));
  
  function nextQuestion() {
    const selectedAnswer = document.querySelector('.selected');
    if (selectedAnswer) {
      const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
      if (selectedAnswer.dataset.index == correctAnswerIndex) {
        selectedAnswer.classList.add('correct');
        correctAnswers++;
      } else {
        selectedAnswer.classList.add('incorrect');
        answers[correctAnswerIndex + (4 * currentQuestionIndex)].classList.add('correct');
      }
      selectedAnswer.classList.remove('selected');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questionContainers.length) {
      displayQuestion();
    } else {
      finishTest();
    }
  }
  
  function prevQuestion() {
    const selectedAnswer = document.querySelector('.selected');
    if (selectedAnswer) {
      const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
      if (selectedAnswer.dataset.index == correctAnswerIndex) {
        correctAnswers--;
      }
    }
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
      displayQuestion();
    } else {
      currentQuestionIndex = 0;
    }
  }
  
  function displayQuestion() {
    questionContainers.forEach((container, index) => {
      if (index === currentQuestionIndex) {
        container.style.display = 'flex';
      } else {
        container.style.display = 'none';
      }
    });
    highlightCorrectAnswer();
  }
  
  function selectAnswer(event) {
    const selectedAnswer = event.currentTarget;
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
    answers.forEach(answer => {
      answer.classList.remove('selected', 'correct', 'incorrect');
    });
    selectedAnswer.classList.add('selected');
    if (selectedAnswer.dataset.index == correctAnswerIndex) {
      selectedAnswer.classList.add('correct');
    } else {
      selectedAnswer.classList.add('incorrect');
      answers[correctAnswerIndex + (4 * currentQuestionIndex)].classList.add('correct');
    }
  }
  
  function highlightCorrectAnswer() {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
    answers.forEach(answer => {
      answer.classList.remove('correct', 'incorrect');
      if (answer.dataset.index == correctAnswerIndex + (4 * currentQuestionIndex)) {
        answer.classList.add('correct');
      }
    });
  }
  
  function finishTest() {
    const score = Math.round(correctAnswers / questionContainers.length * 100);
    resultContainer.style.display = 'block';
    resultContainer.querySelector('#result-text').textContent = `Вы ответили правильно на ${score}% вопросов.`;
    nextQuestionBtn.style.display = 'none';
    prevQuestionBtn.style.display = 'none';
  }
  
  
  
  // Список вопросов и ответов
  const questions = [
    {
      question: 'В какое время года начинается сезон грибной охоты?',
      answers: ['Весной', 'Летом', 'Осенью', 'Зимой'],
      correctAnswerIndex: 2
    },
    {
      question: 'Какие факторы влияют на начало сезона грибной охоты??',
      answers: ['Температура и влажность', 'Количество солнечных дней', 'Фаза луны', 'Все вышеперечисленные факторы'],
      correctAnswerIndex: 3
    },
    {
      question: 'Какой тип леса лучше всего подходит для сбора грибов?',
      answers: ['Хвойные леса', 'Широколиственные леса', 'Смешанные леса', 'Тропические леса'],
      correctAnswerIndex: 2
    },
    {
      question: 'Какие виды грибов чаще всего встречаются в начале осеннего сезона?',
      answers: ['Белые грибы', 'Лисички', 'Подберезовики', 'Моховики'],
      correctAnswerIndex: 1
    },
    {
      question: 'Какие грибы растут на старых пнях и палой древесине?',
      answers: ['Опята', 'Чага', 'Маслёнки', 'Красноголовик'],
      correctAnswerIndex: 1
    },
    {
      question: 'В какое время суток лучше всего отправляться на грибную охоту?',
      answers: ['Утром', 'Днем', 'Вечером', 'Ночью'],
      correctAnswerIndex: 1
    }
  ];
  
  // Первоначальное отображение первого вопроса
  displayQuestion();
  