import styled from 'styled-components'
import { silverDark } from 'utils/colors'
import PropTypes from 'prop-types'

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-color: ${silverDark};
  border-width: 1px;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 6px;
  border-color: ${silverDark};
  border-width: 1px;
  line-height: 1.7;
  resize: ${props => props.resize || 'auto'};
`

const GeneralInput = (props) => {
  if (props.type === 'textarea') {
    return (
      <TextArea resize={'none'} {...props} />
    )
  }
  return (
    <Input {...props} />
  )
}

GeneralInput.propTypes = {
  name: PropTypes.string.isRequired,
}

export default GeneralInput
