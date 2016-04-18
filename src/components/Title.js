
import React, { Component } from 'react'

import ReactInterval from 'react-interval'

import 'styles/Title.scss'

class Title extends Component {

  state = {
    index: 0
  }

  change = () => {
    const { switches } = this.props
    const { index } = this.state

    /*
     * Should be doin that modulo thing
     */
    this.setState({ index: (index === switches.length - 1 ? 0 : index + 1) })
  }

  componentDidMount () {
    new TimelineMax()
      .from(this.refs.switch, 1, { opacity: 0 })
  }

  render () {

    const { switches } = this.props
    const { index } = this.state

    return (
      <div className='Title'>
        <h1 className='heading'>mjml app. html email editor</h1>
        <span>The only app that makes <br />responsive email </span>
        <span className='switch' ref='switch'>
            {switches[index]}
        </span>
        <ReactInterval timeout={2000} enabled={true} callback={this.change} />
      </div>
    )
  }
}

export default Title
