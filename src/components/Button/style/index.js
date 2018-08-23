import styled, { css } from 'styled-components'
import * as enable from './enable'
import disable from './disable'

const sizes = {
  small: '24px',
  default: '32px',
  large: '40px'
}

const ButtonWrapper = styled.button`
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  font-size: 16px;
  height: ${({ size }) => sizes[size]};
  line-height: ${({ size }) => sizes[size]};
  outline: 0;
  padding: 0 16px;
  transition: all 0.2s ease-in-out;

  ${({ disabled, role }) => (disabled ? disable : enable[role])};
`

export default ButtonWrapper
