import { inject, observer } from 'mobx-react'
import NextHead from 'next/head'

@inject('store') @observer
export default class GunLoader extends React.Component {
  componentDidMount() {
    this.props.store.loadGun(Gun)
  }

  render() {
    return (
      <NextHead>
        {/*<script src="https://cdn.jsdelivr.net/npm/gun/gun.js" />*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/gun/sea.js" />*/}
      </NextHead>
    )
  }
}
