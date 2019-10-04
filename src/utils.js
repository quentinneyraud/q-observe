export const preprocessElementArgument = (args) => {
  if (typeof args === 'string') {
    return Array.from(document.querySelectorAll(args))
  } else if (args instanceof HTMLCollection) {
    return Array.from(args)
  } else if (args instanceof HTMLElement) {
    return [args]
  }

  return args
}
