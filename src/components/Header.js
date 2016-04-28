import React, { Component } from 'react'
import cx from 'classnames'

import Button from 'components/Button'

import 'styles/Header.scss'

class Header extends Component {

  state = {
    compact: false,
  }

  componentDidMount () {
    window.addEventListener('scroll', this.refresh)
    this.refresh()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.refresh)
  }

  refresh = () => {
    const shouldBeCompact = window.scrollY > 200
    if (shouldBeCompact && !this.state.compact) {
      this.setState({ compact: true })
    } else if (!shouldBeCompact && this.state.compact) {
      this.setState({ compact: false })
    }
  }

  render () {
    const { compact } = this.state

    return (
      <div className={cx('Header', { compact })}>
        <div className='container'>
          <div className='Header-left'>
            <a href='http://mjmlio.github.io/mjml-app/'><img src={require('../assets/logo.svg')} /></a>
          </div>
          <div className='Header-right'>
            <a target='_blank' href='https://mjml.io/about'>About</a>
            <a target='_blank' href='https://mjml.io/documentation/'>Documentation</a>
            <Button className='download' href='https://github.com/mjmlio/mjml-app/releases'>Download</Button>
          </div>
        </div>
      </div>
    )
  }

}

export default Header
