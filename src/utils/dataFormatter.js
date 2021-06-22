export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function formatDate(dateAsString) {
  return dateAsString.split('-').reverse().join('/');
}

export function formatDateTime(dateAsObject) {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const date = new Date(dateAsObject);

  return `${date.getDate()} de ${
    months[date.getMonth()]
  } de ${date.getFullYear()}, ${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }:${
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  }:${date.getSeconds()}`;
}

export function formatDateToInput(dateAsObject) {
  const date = new Date(dateAsObject);
  const day = date.getDate();
  const month = date.getMonth();

  return `${date.getFullYear()}-${month >= 10 ? month : '0' + month}-${
    day >= 10 ? day : '0' + day
  }`;
}

export function formatSUSCardNumber(susCardNumber) {
  susCardNumber = susCardNumber.replace(/[^\d]/g, '');
  return susCardNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}

export function formatPhoneNumber(number) {
  var cleanedNumber = ('' + number).replace(/\D/g, '');

  if (number.length === 11) {
    var match = cleanedNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  } else if (number.length === 10) {
    match = cleanedNumber.match(/^(\d{2})(\d{4})(\d{4})$/);
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  } else if (number.length === 9) {
    match = cleanedNumber.match(/^(\d{5})(\d{4})$/);
    return match[1] + '-' + match[2];
  } else if (number.length === 8) {
    match = cleanedNumber.match(/^(\d{4})(\d{4})$/);
    return match[1] + '-' + match[2];
  } else return number;
}
