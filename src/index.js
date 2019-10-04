// import ObservedElement from './ObservedElement'
import { preprocessElementArgument } from './utils'

export default {
  observers: [],
  elements: [],
  observe (el = null, options) {
    if (!el) {
      console.warn('Element argument passed to observe function is not valid')
      return
    }

    console.log(preprocessElementArgument(el))
  },
  observeOnce () {

  },
  unobserve () {

  },
  observeChildren (parentEl = null, options = {}) {
    if (!parentEl) {
      console.warn('Parent element argument passed to observeChildren function is not valid')
      return
    }

    const elements = preprocessElementArgument(parentEl)

    elements
      .forEach(el => this.observe(el))

    if (options.watch) {
      const config = {
        attributes: false,
        childList: true,
        characherData: false,
        subtree: true
      }

      const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            console.log('mutation:', mutation)
            Array.from(mutation.addedNodes)
              .forEach(node => this.observe(node))
          }
        }
      }

      const observer = new MutationObserver(callback)
      elements
        .forEach(el => observer.observe(el, config))
    }
  },
  unobserveChildren () {

  },
  setDefault () {

  },
  setDefaultThreshold () {

  },
  setDefaultMargin () {

  },
  setDefaultOnce () {

  },
  getObservers () {

  },
  getObserver () {

  }
}
