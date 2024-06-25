export const titleCase = (str: string, separator: string): string => {
  if (str) {
    return str
      .split(separator)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  return ''
}

export const camelCaseToTitleCase = (str: string): string => {
  if (str) {
    const spaced = str.replace(/([A-Z])/g, ' $1').trim()

    return spaced
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }
  return ''
}

export const checkHttp = (url: string): string => {
  return url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `http://${url}`
}
