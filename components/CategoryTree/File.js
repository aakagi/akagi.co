import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import Draggable from 'react-draggable'
import { icons } from 'utils/icons'
import { silverDark, white } from 'utils/colors'

const FileWrapper = styled.div`
  padding: 12px 18px;
  text-align: left;
  cursor: pointer;
  background-color: ${props => props.isActive ? silverDark : white};

  &:hover {
    background-color: ${silverDark};
  }
`

const FileIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-bottom: -1px;
`

const File = ({ fileName, isActive, ...rest }) => (
  <FileWrapper isActive={isActive} {...rest}>
    <FileIcon
      src={icons['file-red']}
    />
    {fileName}
  </FileWrapper>
)

File.propTypes = {
  isActive: PropTypes.bool,
  fileName: PropTypes.string,
}

export default File
