import './GlobalStyles'
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as MobxProvider } from 'mobx-react'
import { initStore } from 'store'
import theme from 'utils/theme'

export default class AppLayout extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    console.log('isServer', isServer)
    const store = initStore(isServer)
    return {
      isServer,
      lastUpdate: store.lastUpdate,
    }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
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
