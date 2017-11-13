import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { silverDark, silver } from 'utils/colors'
import { icons } from 'utils/icons'
import NavButton from './NavButton'
import { NAV_WIDTH, NAV_PADDING } from './sizes'

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${NAV_WIDTH}px;
  padding: ${NAV_PADDING}px;
  text-align: center;
  border-right: 1px solid ${silverDark};
  background-color: ${silver};
`

const NavLogo = styled.img`
  width: 100%;
  height: 50px;
`

const ActionsWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
`

const NavBar = ({
  newThoughtIcon = 'plus-red',
  newThoughtTooltip = 'New Thought',
  onNewThought,

  newFolderIcon = 'folder-red',
  newFolderTooltip = 'New Folder',
  onNewFolder,
}) => (
  <NavBarWrapper>
    <NavLogo src={icons['sun-black']} />
    <ActionsWrapper>
      <NavButton
        icon={newThoughtIcon}
        tooltip={newThoughtTooltip}
        onClick={onNewThought}
      />
      <NavButton
        icon={newFolderIcon}
        tooltip={newFolderTooltip}
        onClick={onNewFolder}
      />
      <NavButton
        icon={'search-red'}
        tooltip={'Search'}
        size={'22px'}
        onClick={() => console.log('TODO: search')}
      />
    </ActionsWrapper>
  </NavBarWrapper>
)

NavBar.propTypes = {
  onNewThought: PropTypes.func.isRequired,
  onNewFolder: PropTypes.func.isRequired,
}

export default NavBar
