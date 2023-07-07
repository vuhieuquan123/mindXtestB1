function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sumOfPrimesInRange(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  const a = parseInt(prompt("Nhập số a: "));
  const b = parseInt(prompt("Nhập số b: "));
  if (a >= b) {
    alert("a phải nhỏ hơn b");
  } else {
    const sum = sumOfPrimesInRange(a, b);
    alert(`Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}`);
  } 