import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import 'styles/YoloSlide.scss'

const steps = [
  {
    title: 'Browse the official presets library',
    img: require('assets/slides/1-browse.png'),
    desc: 'The presets section will provide a selection of the best community \
      templates using MJML. If you want your template to appear in this \
      section, please submit a pull request at <link>!'
  },
  {
    title: 'Manage your templates',
    img: require('assets/slides/2-manage.png'),
    desc: 'Managing your templates can be done within the app. You can import \
      your ‘.mjml’ files, create new ones, delete your old templates, and \
      edit them with a pretty cool live reload!'
  },
  {
    title: 'Edit you email using a customizable editor',
    img: require('assets/slides/3-edit.png'),
    desc: 'When focused on the editor, you can toggle a live preview by \
      hitting ‘Cmd+p’ (or click the preview button on the top left corner) \
      and select the platform you want your email to be previewed on.'
  },
  {
    title: 'Customize your environment',
    img: require('assets/slides/4-customize.png'),
    desc: 'As a developer, I like my environment to looks the way I want. \
      Using the Ace editor allows you to selects a theme from all Ace themes \
      library available in the Settings button on the top left corner.'
  },
  {
    title: 'Send your tests to your inbox',
    img: require('assets/slides/5-send.png'),
    desc: 'The live preview is pretty cool, but we also provided a way to \
      directly send tests to your inbox to visualize the final email on your \
      phone, desktop client or browser client.<br />You will need a Mailjet \
      account, with your API Keys (<link>), and an valid email address to be \
      used as a sender, and recipient.'
  },
]

class YoloSlide extends Component {

  constructor (props) {
    super(props)

    this._fixed = false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  }

  handleScroll = (e) => {
    const node = findDOMNode(this)
    const img = this.refs.img

    const imgRect = img.getBoundingClientRect()
    const rect = node.getBoundingClientRect()

    const shouldBeFixed = rect.top <= 0 && window.scrollY < rect.height

    if (shouldBeFixed && !this._fixed) {
      this._fixed = true
      TweenMax.set(this.refs.img, {
        position: 'fixed',
        top: imgRect.top,
        left: imgRect.left,
        width: imgRect.width
      })
    } else if (!shouldBeFixed && this._fixed) {
      this._fixed = false
      TweenMax.set(this.refs.img, { position: 'static' })
    }
  }

  render () {
    return (
      <div className='YoloSlide'>
        <div className='container'>

          <div className='YoloSlide-items-container'>

            {steps.map((step, i) => (
              <div className='YoloSlide-item' key={i}>
                <h3>
                  {step.title}
                </h3>
                <section>
                  {step.desc}
                </section>
              </div>
            ))}

          </div>

          <div className='YoloSlide-img'>
            <img ref='img' src={`${steps[0].img}`} />
          </div>

        </div>
      </div>
    )
  }

}

export default YoloSlide
