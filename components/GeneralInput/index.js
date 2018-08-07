import styled from 'styled-components'
import { red, redFill, white } from 'utils/colors'
import PropTypes from 'prop-types'

const InputWrapper = styled.div`
  width: 100%;
`

const baseStyles = (props) => `
  border-color: ${props.theme.input.border};
  width: 100%;
  padding: 6px 12px;
  border-width: 1px;
  outline: none;
  font-size: 12px;
  line-height: 1.7;
  border-radius: 20px;
`

const Input = styled.input`
  ${props => baseStyles(props)}
  background-color: ${props => props.error ? props.theme.input.errorFill : white};
`

const TextArea = styled.textarea`
  ${props => baseStyles(props)}
  resize: ${props => props.resize || 'auto'};
`

const InputError = styled.div`
  color: ${props => props.theme.input.errorText};
  font-size: 10px;
  text-align: left;
  padding-left: 8px;
  height: 10px;
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
