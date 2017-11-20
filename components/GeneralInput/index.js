import styled from 'styled-components'
import { silverDark } from 'utils/colors'

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
`

const GeneralInput = (props) => {
  if (props.type === 'textarea') {
    return (
      <TextArea {...props} />
    )
  }
  return (
    <Input {...props} />
  )
}

export default GeneralInput
