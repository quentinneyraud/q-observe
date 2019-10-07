// import ObservedElement from './ObservedElement'
import { preprocessElementArgument } from './utils'

const observe = (el = null, options) => {
  if (!el) {
    console.warn('Element argument passed to observe function is not valid')
    return
  }

  console.log(preprocessElementArgument(el))
}

const observeChildren = (parentEl = null, options = {}) => {
  if (!parentEl) {
    console.warn('Parent element argument passed to observeChildren function is not valid')
    return
  }

  const elements = preprocessElementArgument(parentEl)

  elements
    .forEach(el => observe(el))

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
            .forEach(node => observe(node))
        }
      }
    }

    const observer = new MutationObserver(callback)
    elements
      .forEach(el => observer.observe(el, config))
  }
}

const obj = {
  observeOnce () {

  },
  unobserve () {

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

export default {
  observe,
  observeChildren
}
