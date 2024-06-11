import React from 'react'
import * as ReactDOM from 'react-dom/client'

import O_SearchBar from './components/O_SearchBar/O_SearchBar.jsx'

console.clear()

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  } else {
    return ''
  }
}

const root = ReactDOM.createRoot(document.querySelector('.O_Menubar .W_Search'))

root.render(<O_SearchBar searchInputValue={getSearchRequest()} />)