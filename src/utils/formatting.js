export function formatCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatSUS(susCardNumber) {
  susCardNumber = susCardNumber.replace(/[^\d]/g, "");
  return susCardNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
