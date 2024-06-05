import './Q_SearchField.scss'
import React from 'react'

export default class Q_SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInput = () => {
    const { value } = this.input.current
    const { handleInput } = this.props
    handleInput(value)
  }

  render() {
    const { value, handleSubmit, placeholder } = this.props

    return (
      <input
        className="Q_SearchField"
        placeholder={placeholder}
        ref={this.input}
        value={value}
        onInput={this.handleInput}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
    )
  }
}