
import React, { Component } from 'react'

import 'styles/Feature.scss'

class Feature extends Component {

  render () {

    /*
          <div className='Feature-description next' onClick={onNext}>
            <h3>
              {next.title}
            </h3>
            <section>
              {next.desc}
            </section>
          </div>
     */

    const { content, next, onNext } = this.props
  
    return (
      <div className='Features-item'>
        <div className='Feature-description'>
          <span className='heading'>FEATURES</span>
          <h3>
            {content.title}
          </h3>
          <section>
            {content.desc}
          </section>
        </div>
        <div className='image'>
          <img src={content.img} onClick={onNext} />
        </div>
      </div>
    )
  }
}

export default Feature
