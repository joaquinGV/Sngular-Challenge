// Función challenge -> 2F(n-2) + 3T(n-2) - 7P(n-1)
const CalculoSerie = (n) => {
  if (isNaN(n)) return "No valid input";
  if (n < 1) return 0;
  const serie =
    2 * serieFibonacci(n - 2) +
    3 * numeroTriangular(n - 2) -
    7 * numeroPrimo(n - 1);
  return serie;
};

// Calculo serie Fibonacci -> 0,1,1,2,3,5,8,13,21,34,55,89
const serieFibonacci = (n) => {
  if (n < 0) return 0;
  if (n <= 1) return n;
  return serieFibonacci(n - 1) + serieFibonacci(n - 2);
};

// Calculo serie Triangular Tn = n(n+1)/2  -> 1,3,6,10,15,21,28
const numeroTriangular = (n) => {
  if (n < 1) return 0;
  let result = (n * (n + 1)) / 2;
  return result;
};

// Calculo serie Primos -> 2,3,5,7,11,13,17,19,23
const numeroPrimo = (n) => {
  if (n < 1) return 0;

  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (esPrimo(num)) {
      count++;
    }
  }

  return num;
};

const esPrimo = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 == 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

// const prueba = () => {
//   for (let i = -2; i <= 10; i++) {
//     console.log(`Fibonacci ${i}: ${serieFibonacci(i)}`);
//     console.log(`Triangular ${i}: ${numeroTriangular(i)}`);
//     console.log(`Primo ${i}: ${numeroPrimo(i)}`);
//   }
// };

// prueba();

export default CalculoSerie;
