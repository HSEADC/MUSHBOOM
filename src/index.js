import './index.css'
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.A_TagRecipes');
    const recipes = document.querySelectorAll('.O_CardRecipe, .O_CardLargeRecipe');
  
    // Устанавливаем начальный фильтр на "Все рецепты"
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
      });
    });
  
    function applyFilter(filter) {
      recipes.forEach(function(recipe) {
        if (filter === 'all' || recipe.classList.contains(filter)) {
          recipe.style.display = 'block';
        } else {
          recipe.style.display = 'none';
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.A_TagArticles');
    const articles = document.querySelectorAll('.MainCardArticle, .O_CardArticle');
  
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
    "Самые практичные дождевики для грибных походов | Статья",
    "Наборы для выращивания Pink Oyster | Статья", 
    "Angels Wings — самые лучшие леса для правильного поиска | Статья", 
    "Как привить детям любовь к грибным походам? | Статья", 
    "Timberland x Nina Chanel — свежий выбор для грибников? | Статья", 
    "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья"
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
    return 'articles/article1.html';
  } 
  else if (option === 'Феттучини | Рецепт') {
    return 'recipes/fettuchini.html';
  } 
  else if (option === 'Самые практичные дождевики для грибных походов | Статья') {
    return 'articles/article1.html';
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
  
  
  