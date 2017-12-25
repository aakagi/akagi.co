import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'

// import Editor from './components/Editor'
// import NavBar from './containers/NavBarContainer'
// import CategoryTree from './containers/CategoryTreeContainer'
import NavBar from 'components/NavBar'
import CategoryTree from 'components/CategoryTree'
// 
// 
// import ToolBar from './containers/ToolBarContainer'

const SideBarWrapper = styled.div`
  width: 20%;
  display: flex;
`

const MainPageWrapper = styled.div`
  width: 80%;
  flex: 2;
`

const Thoughts = () => (
  <AppLayout>
    <SeoHead />
    <SideBarWrapper>
      <NavBar
        onNewThought={() => console.log('onNewThought')}
        onNewFolder={() => console.log('onNewFolder')}
      />
      <CategoryTree />
    </SideBarWrapper>
    <MainPageWrapper>
      {/*<ToolBar />
      <Editor
        text={testThoughts}
        view={'eagle'}
        editing={false}
        commenting={false}
      />*/}
    </MainPageWrapper>
  </AppLayout>
)

export default Thoughts
