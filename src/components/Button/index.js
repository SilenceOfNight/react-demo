import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonWrapper from './style'

class Button extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return <ButtonWrapper {...this.props} />
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  role: PropTypes.oneOf(['normal', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'default', 'large'])
}

Button.defaultProps = {
  disabled: false,
  role: 'normal',
  size: 'default'
}

export default Button
