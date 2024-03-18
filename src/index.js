import './index.css'


  document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.A_Filter');
    const articles = document.querySelectorAll('.MainCardArticle, .O_CardArticle, .O_CardRecipe, .O_CardLargeRecipe');
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
    "Как выбрать экипировку? | Статья",
    "Феттучини | Рецепт", 
    "Жареные шампиньоны | Рецепт",
    "Китайские брокколи | Рецепт",
    "Самые практичные дождевики для грибных походов | Статья",
    "Наборы для выращивания Pink Oyster | Статья", 
    "Angels Wings — самые лучшие леса для правильного поиска | Статья", 
    "Как привить детям любовь к грибным походам? | Статья", 
    "Timberland x Nina Chanel — свежий выбор для грибников? | Статья", 
    "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья",
    "Тихая охота (Топ-5 правил) | Статья",
    "Toxic Mush | Памятка",
    "Одежда грибника | Памятка",
    "Грибной страх | Памятка",
    "Путь грибника | Памятка"
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
  
  
  