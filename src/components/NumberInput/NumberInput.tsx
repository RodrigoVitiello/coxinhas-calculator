import React, { Component } from 'react';
import './NumberInput.scss'

interface INumberInputProps {
  labelText: string,
  placeholder?: string,
  defaultValue: number,
  handleOnChange: (value: number) => void
}

interface INumberInputState {
  currentValue: string
}

class NumberInput extends Component<INumberInputProps, INumberInputState> {
  constructor(props: INumberInputProps) {
    super(props)

    this.state = {
      currentValue: '0'
    }
  }

  componentDidMount() {
    this.setState({currentValue: String(this.props.defaultValue)})
  }

  async handleInputValue(value: string) {

    if (value.match(/^\d+[.,]?(\d+)?$/g)) {
      await this.setState({currentValue: value.replace(/^0+/, '').replace(',', '.')})
    } else if (value.length === 0) {
      await this.setState({currentValue: '0'})
    }

    this.props.handleOnChange(Number(this.state.currentValue))
  }

  render() {
    const { labelText, placeholder } = this.props
    const labelId: string = `number-label-${Math.random().toString(36).replace(/[^a-z]+/g, '')}`

    return (
      <div className='number-input-container'>
        <label htmlFor={labelId}>{labelText}</label>
        <input
          id={labelId}
          aria-label='number-input'
          type='text'
          value={this.state.currentValue}
          onChange={ (e) => this.handleInputValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

export default NumberInput;
