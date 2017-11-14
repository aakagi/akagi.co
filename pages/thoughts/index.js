import React from 'react'
import styled from 'styled-components'
import SeoHead from 'components/SeoHead'
// import Editor from './components/Editor'
import NavBar from './containers/NavBarContainer'
import CategoryTree from './containers/CategoryTreeContainer'
// import ToolBar from './containers/ToolBarContainer'

// import testThoughts from './thoughts/component.thoughts'


const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
`

const MainPageWrapper = styled.div`
  width: 80%;
  flex: 2;
`

const Thoughts = (props) => (
  <div>
    <SeoHead />
    <SideBarContainer>
      <NavBar
        onNewThought={() => console.log('onNewThought')}
        onNewFolder={() => console.log('onNewFolder')}
      />
      <CategoryTree />
    </SideBarContainer>
    <MainPageWrapper>
      {/*<ToolBar />
      <Editor
        text={testThoughts}
        view={'eagle'}
        editing={false}
        commenting={false}
      />*/}
    </MainPageWrapper>
  </div>
)

export default Thoughts
