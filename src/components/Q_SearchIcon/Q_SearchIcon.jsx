import './Q_SearchIcon.scss'
import React from 'react'
import classNames from 'classnames'

export default class Q_SearchIcon extends React.Component {
  render() {
    const { handleClick, disabled, type } = this.props 
    const classes = classNames({
        Q_SearchIcon: true,
        disabled: disabled,
        [`${type}`]: true
    })

    return (
      <div className={classes} onClick={handleClick}></div>
    )
  }
}