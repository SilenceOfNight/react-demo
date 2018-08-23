import { css } from 'styled-components'
import { getThemeValue } from '../../../util'

const primaryColor = getThemeValue('colorPrimary', '#159fff')
const activeColor = getThemeValue('colorActive', '#09d')

export default css`
  background-color: ${primaryColor};
  border-color: ${primaryColor};
  color: #fff;

  &:hover {
    box-shadow: 0 0 5px ${primaryColor};
  }

  &:active {
    background-color: ${activeColor};
  }
`
