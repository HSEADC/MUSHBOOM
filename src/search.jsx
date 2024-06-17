import React from 'react'
import * as ReactDOM from 'react-dom/client'

import S_SearchContent from './components/S_SearchContent/S_SearchContent.jsx'

console.clear()

function getSearchRequest() {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const request = searchParams.get('request');
  console.log("Request param:", request);  // Проверяем, что параметр присутствует
  return request;
}


const root = ReactDOM.createRoot(
  document.querySelector('.W_ContentReactModule')
)
root.render(<S_SearchContent searchInputValue={getSearchRequest()} />)