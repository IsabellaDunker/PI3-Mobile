export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export const unmaskCpf = (value: string) => {
  return value
    .replace('.', '')
    .replace('.', '')
    .replace('-', '')
} 

export const brDateMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2') 
    .replace(/(\d{2})(\d)/, '$1/$2')
}

export const usToBrDate = (value: string) => {
  const year = value.substring(0, 4);
  const month = value.substring(5, 7);
  const day = value.substring(8, 10);

  return [day, month, year].join('/');
}

export const brToUsDate = (value: string) => {
  const day = value.substring(0, 2);
  const month = value.substring(3, 5);
  const year = value.substring(6, 10);

  return [month, day, year].join('-');
}

export const noBarsDate = (value: string) => {
  const year = value.substring(0, 4);
  const month = value.substring(5, 7);
  const day = value.substring(8, 10);

  return [day, month, year].join('');
}

export const noBarsToBrDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2') 
    .replace(/(\d{2})(\d)/, '$1/$2')
}

export const noBarsToUsDate = (value: string) => {
  const day = value.substring(0, 2);
  const year = value.substring(2, 4);
  const month = value.substring(4, 8);

  return [month, day, year].join('-');
}