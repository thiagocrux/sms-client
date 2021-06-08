export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatDate(dateAsString) {
  const date = new Date(dateAsString);
  const dateFormatted = Intl.DateTimeFormat("pt-BR").format(date);
  return dateFormatted;
}

export function formatSUS(susCardNumber) {
  susCardNumber = susCardNumber.replace(/[^\d]/g, "");
  return susCardNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
