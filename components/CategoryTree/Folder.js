import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { icons } from 'utils/icons'
import { silverDark } from 'utils/colors'

const FolderWrapper = styled.div`
  padding: 12px 18px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${silverDark};
  }
`

const FolderIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-bottom: -1px;
`

const folderIcons = {
  folder: {
    open: icons['folder-open-red'],
    closed: icons['folder-red'],
  },
  version: {
    open: icons['version-red'],
    closed: icons['version-red'],
  },
}

function getFolderIcon({ icon, isOpen }) {
  return isOpen
    ? folderIcons[icon].open
    : folderIcons[icon].closed
}

const Folder = ({ folderName, icon, isOpen, children, ...rest }) => (
  <div>
    <FolderWrapper {...rest}>
      <FolderIcon
        src={getFolderIcon({ icon, isOpen })}
      />
      {folderName}
    </FolderWrapper>
    {isOpen ? children : ''}
  </div>
)

Folder.propTypes = {
  isOpen: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(folderIcons)).isRequired, // Prop must be a key in folderIcons
  folderName: PropTypes.string,
}

export default Folder
