import './M_PostSuggestion.scss'
import React from 'react'

import A_TextSearch from '../A_TextSearch/A_TextSearch.jsx'

export default class M_PostSuggestion extends React.Component {
  render() {
    const { title, description, url } = this.props

    return (
      <a className="M_PostSuggestion" href={url}>
        <A_TextSearch type="h3" text={title} />
        <A_TextSearch type="p" text={description} />
      </a>
    )
  }
}