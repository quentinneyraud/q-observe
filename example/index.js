import QObserve from '../src/index'

const boxes = document.getElementsByClassName('boxes')[0]

QObserve.observeChildren(boxes, {
  watch: true
})

const div = document.createElement('div')
const div2 = document.createElement('div')
div.appendChild(div2)
boxes.appendChild(div)
