import React, { Component } from 'react'
import { connect } from 'react-redux'

import TileGrid from 'components/TileGrid'

@connect(
  state => ({
    components: state.components,
  })
)
class ComponentsList extends Component {

  render () {
    const { components } = this.props

    return (
      <div>
            <div className='BlankPlaceholder anim-bounce'>
              <h1 className='anim-fadeInUp'>
                {'You have no custom component.'}
              </h1>
            </div>
      </div>
    )
  }

}

export default ComponentsList
