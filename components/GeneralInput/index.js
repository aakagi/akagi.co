import styled from 'styled-components'
import { red, redFill, white } from 'utils/colors'
import PropTypes from 'prop-types'

const baseStyles = (props) => `
  border-color: ${props.theme.input.border};
  width: 100%;
  padding: 6px;
  border-width: 1px;
`

const Input = styled.input`
  ${props => baseStyles(props)}
  background-color: ${props => props.error ? props.theme.input.errorFill : white};
  outline: none;
`

const TextArea = styled.textarea`
  ${props => baseStyles(props)}
  resize: ${props => props.resize || 'auto'};
  line-height: 1.7;
`

const InputError = styled.div`
  color: ${props => props.theme.input.errorText};
  font-size: 10px;
  text-align: left;
  padding-left: 8px;
  height: 10px;
`

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`

const GeneralInput = (props) => (
  <InputWrapper>
    {props.type === 'textarea' ?
      <TextArea resize={'none'} {...props} />
    :
      <Input {...props} />
    }
    <InputError>
      {props.error}
    </InputError>
  </InputWrapper>
)

GeneralInput.propTypes = {
  name: PropTypes.string.isRequired,
}

GeneralInput.defaultProps = {
  theme: {
    input: {
      border: red,
      errorText: red,
      errorFill: redFill,
    },
  }
}

export default GeneralInput
