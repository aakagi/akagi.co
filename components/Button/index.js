import styled from 'styled-components'
import { black, red } from 'utils/colors'

const Button = styled.button`
  border: 1px solid ${black};
  padding: 6px;
  width: ${props => props.width ? props.width : 'auto'};

  &:hover {
    border-color: ${red};
    color: ${red};
    cursor: pointer;
  }
`

export default Button
