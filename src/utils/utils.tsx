export const titleCase = (str: string, separator?: string): string => {
  if (separator) {
    return str
      .split(separator)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
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


export const formatDate = (dateString: string) => {
  const date = new Date(Number(dateString));
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};