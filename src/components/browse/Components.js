import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import TileGrid from 'components/TileGrid'
import ComponentOverlayActions from 'components/ComponentOverlayActions'

import { createNewComponent } from 'actions/components'

@connect(
  state => ({
    components: state.components.get('list'),
  })
)
class ComponentsList extends Component {

  createNew = () => {
    this.props.dispatch(createNewComponent())
  }

  render () {
    const { components } = this.props

    return (
      <div>
        {!!components.size
          ? <TileGrid
            canEditName
            noThumbnail
            overlayActions={ComponentOverlayActions}
            items={components} />
          : (
            <div className='BlankPlaceholder anim-bounce'>
              <h1 className='anim-fadeInUp' style={{ marginBottom: 40 }}>
                {'You have no component.'}
              </h1>
              <div className='anim-fadeInDelayed'>
                <Button className='primary' onClick={this.createNew}>
                  {'Create your first one!'}
                </Button>
              </div>
            </div>
          )}
      </div>
    )
  }

}

export default ComponentsList
