export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatDate(dateAsString) {
  const date = new Date(dateAsString);
  const dateFormatted = Intl.DateTimeFormat("pt-BR").format(date);
  return dateFormatted;
}
