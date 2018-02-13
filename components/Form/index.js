import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  max-width: ${props => props.maxWidth ? props.maxWidth : '500px'};

  input, textarea, select {
    width: 100%;
    margin-bottom: 12px;
  }
`

export default Form
