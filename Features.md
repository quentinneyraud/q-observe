# API design

## Observe

```js
observer.observe(el)
observer.observe('.test')
observer.observe('#a')
observer.observe(document.getElementsByClassName('.test'))
observer.observe([el1, el2])
```

## Observe once

```js
observer.observeOnce(el)
observer.observeOnce('.test')
observer.observeOnce('#a')
observer.observeOnce(document.getElementsByClassName('.test'))
observer.observeOnce([el1, el2])
```

## Unobserve

```js
observer.unobserve(el)
observer.unobserve('.test')
observer.unobserve('#a')
observer.unobserve(document.getElementsByClassName('.test'))
observer.unobserve([el1, el2])
```

## Observe children

```js
observer.observeChildren(el, {
  watch: true // watch children
})
observer.observeChildren('.test')
observer.observeChildren('#a')
observer.observeChildren(document.getElementsByClassName('.test'))
observer.observeChildren([el1, el2])
```

## Unobserve children

```js
observer.unobserveChildren(el)
observer.unobserveChildren('.test')
observer.unobserveChildren('#a')
observer.unobserveChildren(document.getElementsByClassName('.test'))
observer.unobserveChildren([el1, el2])
```

## Observe avec des paramètres (pareil pour once)

```js
observer.observe(el, {
  once: true
})
// pareil que
observer.observeOnce(el)

observer.observe(el, {
  threshold: 0.5
})
observer.observe(el, {
  threshold: [0.1, 0.4]
})
```

## Default en general

```js
observer.setDefault({
  thresholds: 0.5,
  class: 'in-view',
  observeClass: 'observe',
  observeOnceClass: 'observe-once'
})
observer.setDefault({
  thresholds: [0.1, 0.5]
})
```

## Default par propriété

```js
observer.setDefaultThresholds(0.5)
observer.setDefaultThresholds([0.2, 0.5])

observer.setDefaultMargin("0 0 0 0")
observer.setDefaultMargin("0px 0px 0px 0px")

observer.setDefaultOnce(true)
```

## Récupérer les observers

```js
observer.getObservers()
```

## Récupérer un/les observer suivant des params

```js
observer.getObserver({
  threshold: 0.5
})
```
