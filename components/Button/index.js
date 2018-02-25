import PropTypes from 'prop-types'
import styled from 'styled-components'
import { black, red } from 'utils/colors'
import animations from './animations'

const Button = styled.button`
  border: 1px solid ${props => props.theme.input.border};
  width: ${props => props.width ? props.width : 'auto'};
  padding: 6px;
  transform: perspective(1px) translateZ(0);

  &:hover, &:focus, &:active {
    animation-name: ${({ hoverAnimation }) => hoverAnimation ? animations[hoverAnimation] : ''};
    animation-duration: 0.2s;
    animation-timing-function: linear;
    cursor: pointer;
  }
`

Button.defaultProps = {
  theme: {
    input: {
      border: red,
    }
  }
}

Button.propTypes = {
  hoverAnimation: PropTypes.oneOf(Object.keys(animations))
}

export default Button
