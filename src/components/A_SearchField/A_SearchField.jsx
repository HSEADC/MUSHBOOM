import './A_SearchField.scss'
import React from 'react'

import Q_SearchField from '../Q_SearchField/Q_SearchField.jsx'
import Q_SearchIcon from '../Q_SearchIcon/Q_SearchIcon.jsx'

export default class A_SearchField extends React.Component {
  constructor(props) {
    super(props)
  }

  renderResetButton = () => {
    const { handleSearchInput } = this.props
    return (
      <Q_SearchIcon
        type="resetField"
        disabled={false}
        handleClick={() => handleSearchInput('')}
      />
    )
  }

  render() {
    const {
      searchInputValue,
      isSearchButtonDisabled,
      handleSearchInput,
      handleSearchSubmit
    } = this.props

    return (
      <div className="A_SearchField">
        <Q_SearchField
          value={searchInputValue}
          placeholder="Поиск"
          handleInput={handleSearchInput}
          handleSubmit={handleSearchSubmit}
        />

        {searchInputValue != '' && this.renderResetButton()}

        <Q_SearchIcon
          type="primary"
          disabled={isSearchButtonDisabled}
          handleClick={handleSearchSubmit}
        />
      </div>
    )
  }
}