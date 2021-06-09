export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatDate(dateAsString) {
  const date = new Date(dateAsString);
  const dateFormatted = Intl.DateTimeFormat("pt-BR").format(date);
  return dateFormatted;
}

export function formatSUSCardNumber(susCardNumber) {
  susCardNumber = susCardNumber.replace(/[^\d]/g, "");
  return susCardNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}

export function formatPhoneNumber(number) {
  var cleanedNumber = ("" + number).replace(/\D/g, "");

  if (number.length === 11) {
    var match = cleanedNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  } else if (number.length === 10) {
    match = cleanedNumber.match(/^(\d{2})(\d{4})(\d{4})$/);
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  } else if (number.length === 9) {
    match = cleanedNumber.match(/^(\d{5})(\d{4})$/);
    return match[1] + "-" + match[2];
  } else if (number.length === 8) {
    match = cleanedNumber.match(/^(\d{4})(\d{4})$/);
    return match[1] + "-" + match[2];
  } else return number;
}
