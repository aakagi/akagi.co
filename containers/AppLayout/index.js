import './GlobalStyles'
import { Provider as MobxProvider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import initStore from 'store'
import theme from 'utils/theme'

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  render() {
    return (
      <MobxProvider store={this.store}>
        <ThemeProvider theme={theme}>
          <div>
            {this.props.children}
          </div>
        </ThemeProvider>
      </MobxProvider>
    )
  }
}
