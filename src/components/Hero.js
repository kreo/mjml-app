import React, { Component } from 'react'

import Title from 'components/Title'
import Button from 'components/Button'

import 'styles/Hero.scss'

const WINDOWS = { name: 'Windows', link: 'https://github.com/mjmlio/mjml-app/releases' }
const LINUX = { name: 'Linux', link: 'https://github.com/mjmlio/mjml-app/releases' }
const OSX = { name: 'OS X', link: 'https://github.com/mjmlio/mjml-app/releases' }

class Hero extends Component {

  constructor (props) {
    super(props)

    let os

    if (navigator.appVersion.indexOf('Win') !== -1) {
      os = [WINDOWS, LINUX, OSX]
    } else if (navigator.appVersion.indexOf('Mac') !== -1) {
      os = [OSX, WINDOWS, LINUX]
    } else {
      os = [LINUX, WINDOWS, OSX]
    }

    this.state = { platform: false, os }
  }

  componentDidMount () {
    new TimelineMax()
      .from(this.refs.desc, 1, { opacity: 0, x: -50 })
      .from(this.refs.img, 1, { opacity: 0, x: 20 }, '-=0.4')
  }

  togglePlatform = () => {
    const { platform } = this.state
    this.setState({ platform: !platform })
  }

  render () {

    const os = this.state.os[0]
    const rest = this.state.os.slice(1)

    return (
      <div className='Hero container'>
        <div className='Hero-left' ref='desc'>
          <Title switches={['easy', 'fun', 'painless', 'beautiful', 'effortless', 'smooth']} />
          <p>
            You can now leverage the power of mjml directly from its first desktop app. Import and manage templates, edit your email with live rendering, customize your environment and send tests straight from the app!
          </p>
          <Button href={os.link} className='button-icon'>
            <i className='ion-arrow-down-a'/>
            <span>Download for {os.name}</span>
          </Button>

          {this.state.platform && (
            <div className='others'>
              <ul>
                {rest.map((os, key) =>
                  <li key={key}><a href={os.link}>{os.name}</a></li>
                )}
              </ul>
            </div>
          )}

          <p className='other-platforms'>
            Looking for <span className='underlined' href='#' onClick={this.togglePlatform}>other platforms?</span>
          </p>

        </div>
        <div className='Hero-right' ref='img'>
          <img src={require('../assets/preview.png')} />
        </div>
      </div>
    )
  }

}

export default Hero