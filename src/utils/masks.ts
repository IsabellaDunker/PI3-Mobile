export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const brDateMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2') 
    .replace(/(\d{2})(\d)/, '$1/$2')
}

export const usToBrDate = (value: string) => {
  const year = value.substring(0, 4)
  const month = value.substring(5, 7)
  const day = value.substring(8, 10);

  return [day, month, year].join('/');
}