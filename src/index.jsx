import './index.css'

// import React from 'react'
// import { createRoot } from 'react-dom/client'

// import ComponentExample from './javascript/ComponentExample.jsx'

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('reactComponentRoot')
//   const root = createRoot(container)
//   root.render(<ComponentExample />)
// })

import React, { useState } from "react";

const SearchModule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchOptions = [
    "Angels Wings — самые лучшие леса для правильного поиска | Статья",
    "Белый гриб | ГрибВики",
    "Бледная поганка | ГрибВики",
    "Волнушка | ГрибВики",
    "Галерина окаймлённая | ГрибВики",
    "Голубцы | Рецепт",
    "Грибная безопасность | Тест",
    "Грибной отвар | Рецепт",
    "Грибной страх | Памятка",
    "Грибы в искусстве: влияние на литературу, живопись и музыку | Статья",
    "Груздь | ГрибВики",
    "Жареные шампиньоны | Рецепт",
    "Жульен | Рецепт",
    "Как выбрать экипировку? | Статья",
    "Как привить детям любовь к грибным походам? | Статья",
    "Календарь грибной охоты | Тест",
    "Китайские брокколи | Рецепт",
    "Лазанья | Рецепт",
    "Лисичка | ГрибВики",
    "Ложная лисичка | ГрибВики",
    "Ложный боровик | ГрибВики",
    "Ложный подберёзовик | ГрибВики",
    "Ложный подосиновик | ГрибВики",
    "Ложный опёнок | ГрибВики",
    "Маслёнок | ГрибВики",
    "Мухомор | ГрибВики",
    "Наборы для выращивания Pink Oyster | Статья",
    "Овощное рагу | Рецепт",
    "Одежда грибника | Памятка",
    "Опёнок | ГрибВики",
    "Палента | Рецепт",
    "Подберёзовик | ГрибВики",
    "Подосиновик | ГрибВики",
    "Путь грибника | Памятка",
    "Рыжик | ГрибВики",
    "Самые практичные дождевики для грибных походов | Статья",
    "Свинушка | ГрибВики",
    "Скумбрия | Рецепт",
    "Сморчок | ГрибВики",
    "Съедобный или ядовитый | Тест",
    "Тихая охота (Топ-5 правил) | Статья",
    "Timberland x Nina Chanel — свежий выбор для грибников? | Статья",
    "Toxic Mush | Памятка",
    "Феттучини | Рецепт",
    "Хумус | Рецепт",
    "Шампиньон | ГрибВики"
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());

    const filteredOptions = searchOptions.filter(option =>
      option.trim().toLowerCase().startsWith(searchTerm)
    );
    setResults(filteredOptions);
  };

  const handleClick = (event) => {
    if (!results.includes(event.target)) {
      setResults([]);
    }
  };

  return (
    <div onClick={handleClick}>
      <input className="Q_SearchField" type="text" placeholder="Поиск" onChange={handleSearch} />
      <div className="C_SearchResults">
        {results.map((result, index) => (
          <a key={index} href={getPageUrl(result)}>
            {result}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchModule;
