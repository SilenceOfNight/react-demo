import { css } from 'styled-components'
import { getThemeValue } from '../../../util'

const primaryColor = getThemeValue('colorPrimary', '#159fff')
const activeColor = getThemeValue('colorActive', '#09d')

export default css`
  background-color: #f9f9f9;
  border-color: #ccc;
  color: #333;

  &:hover {
    border-color: ${primaryColor};
    color: ${primaryColor};
    box-shadow: 0 0 5px ${primaryColor};
  }

  &:active {
    background-color: ${activeColor};
    color: #fff;
  }
`
