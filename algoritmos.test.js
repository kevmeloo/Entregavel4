const {
    isPrime,
    sum,
    fibonacci,
    gcd,
    quicksort,
    countIntegersInRange
  } = require('./algoritmos');
  
  // Teste para isPrime
  test('isPrime retorna true para números primos', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });
  
  test('isPrime retorna false para números não primos', () => {
    expect(isPrime(10)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });
  
  // Teste para sum
  test('sum retorna a soma correta', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
    expect(sum([-1, 0, 1])).toBe(0);
  });
  
  // Teste para fibonacci
  test('fibonacci retorna o valor correto', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });
  
  // Teste para gcd
  test('gcd retorna o máximo divisor comum correto', () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(24, 36)).toBe(12);
  });
  
  // Teste para quicksort
  test('quicksort ordena o array corretamente', () => {
    expect(quicksort([4, 2, 7, 1, 5])).toEqual([1, 2, 4, 5, 7]);
    expect(quicksort([10, 5, 8, 3])).toEqual([3, 5, 8, 10]);
  });
  
  // Teste para countIntegersInRange
  test('countIntegersInRange conta corretamente os inteiros no intervalo', () => {
    expect(countIntegersInRange([1, 2, 3, 4, 5], 3)).toBe(3);
    expect(countIntegersInRange([10, 20, 30, 40, 50], 35)).toBe(3);
  });
  