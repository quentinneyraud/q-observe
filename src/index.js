import ObservedElement from './ObservedElement'

const DEFAULT_OPTIONS = {
  thresholds: [0],
  once: false
}

export default {
  observers: [],
  elements: [],
  setDefaultOptions (options) {
    this.defaultOptions = options
  },
  createObserver (options) {
    const ioInstance = new window.IntersectionObserver(intersections => {
      console.log(intersections)
    }, options)

    const observer = {
      elements: [],
      ioInstance
    }

    this.observers.push(observer)
    return observer
  },
  getObserver (options = null) {
    options = {
      ...this.defaultOptions,
      ...options
    }

    const observer = this.observers.find(observer => observer.thresholds === options.thresholds)

    return observer || this.createObserver(options)
  },
  observe (el, options = DEFAULT_OPTIONS) {
    const observer = this.getObserver(options)

    observer.elements.push(el)
    observer.ioInstance.observe(el)
  },
  observeOnce (el, options) {

  },
  observeChildren (el, options) {

  }
}
