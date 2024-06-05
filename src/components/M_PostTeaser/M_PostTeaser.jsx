import './M_PostTeaser.scss'
import React from 'react'

import A_TextSearch from '../A_TextSearch/A_TextSearch.jsx'

export default class M_PostTeaser extends React.Component {
  render() {
    const { title, description, url, image, tags } = this.props

    const tagElements = []
    tags.forEach((tag, i) => {
      tagElements.push(<A_TextSearch type="tag" text={tag} key={i} />)
    })

    return (
      <a className="M_PostTeaser" href={url}>
        <A_TextSearch type="h3" text={title} />
        <A_TextSearch type="p" text={description} />
        <div className="C_postTeaserTags">{tagElements}</div>
      </a>
    )
  }
}