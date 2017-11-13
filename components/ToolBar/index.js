import React from 'react'
import styled from 'styled-components'
import { silverDark } from 'utils/colors'

const ToolBarWrapper = styled.div`
  height: 48px;
  border-bottom: 1px ${silverDark} solid;
  display: flex;
  align-items: center;
`

const VersionSelect = styled.select`
  
`

const ShareButton = styled.button`
  // align-self: flex-end;
  margin-left: auto;
`

const ToolBar = () => (
  <ToolBarWrapper>
    <VersionSelect>
      <option>
        v0.1
      </option>
      <option>
        v0.0
      </option>
    </VersionSelect>
    <ShareButton>
      Share with... &#9660;
    </ShareButton>
  </ToolBarWrapper>
)

export default ToolBar
