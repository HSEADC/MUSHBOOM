import './A_TextSearch.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_TextSearch extends React.Component {
  render() {
    const { text, type } = this.props

    const classes = classNames({
      A_TextSearch: true,
      [`${type}`]: true
    })

    return <div className={classes}>{text}</div>
  }
}