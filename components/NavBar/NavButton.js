import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { black } from 'utils/colors'
import { icons, iconsEnum } from 'utils/icons'
import { NAV_CENTER } from './sizes'

const IconButtonWrapper = styled.div`
  margin-top: 10px;
  flex: 1;
  display: flex;
`

const IconButton = styled.a`
  content: '';
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 1;
  border-radius: 100%;
  cursor: pointer;

  width: ${NAV_CENTER - 6}px;
  height: ${NAV_CENTER - 6}px;

  &:hover {
    background-color: ${black};
  }
`

const Icon = styled.img`
  margin-top: calc( ((${NAV_CENTER - 6}px) - ${props => props.size}) / 2 );
  width: ${props => props.size};
  height: ${props => props.size};
`

// TODO: Make tooltip
const NavButton = ({
  icon,
  size = '20px',
  ...props,
}) => (
  <IconButtonWrapper>
    <IconButton size={size} {...props}>
      <Icon src={icons[icon]} size={size} />
    </IconButton>
  </IconButtonWrapper>
)

NavButton.propTypes = {
  icon: PropTypes.oneOf(iconsEnum).isRequired,
  size: PropTypes.string,
  // tooltip: PropTypes.string,
}

export default NavButton
