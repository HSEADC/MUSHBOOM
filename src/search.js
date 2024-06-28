import './index.css'
import { getPostTeasers } from './search_data.js'

let content

function initSearch() {
  const O_Search = document.querySelector('.O_Search')
  const A_SearchInput = O_Search.querySelector('.A_SearchInput')
  const A_Button = O_Search.querySelector('.A_SearchButton')

  let requestText = getSearchRequest() // Получаем текст запроса из URL

  if (requestText != undefined) {
    A_SearchInput.value = requestText // Заполняем поле поиска, чтобы значение не терялось
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    requestText = e.target.value
    A_Button.classList.toggle('disabled', requestText.length < 3)
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && requestText.length >= 3) {
      setSearchRequest(requestText)
    }
  })

  A_Button.addEventListener('click', () => {
    if (!A_Button.classList.contains('disabled')) {
      setSearchRequest(A_SearchInput.value)
    }
  })
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  return searchParams.get('request') || ''
}

function setSearchRequest(requestText) {
  const url = window.location.href.split('?')[0]
  window.location.href = url + '?request=' + encodeURIComponent(requestText)
}

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data
    initSearch()
  })
})
