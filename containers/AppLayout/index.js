import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as MobxProvider } from 'mobx-react'
import { initStore } from 'store'
import GlobalStyles from './GlobalStyles'
import theme from 'utils/theme'

export default class Thoughts extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
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
