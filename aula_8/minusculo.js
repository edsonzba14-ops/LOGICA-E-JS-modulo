function primeiraLetraMinuscula(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

console.log(primeiraLetraMinuscula("BATATA"));