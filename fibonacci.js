function fibonacci(n) {
    if (n <= 1) {
      return [0, 1].slice(0, n + 1);
    } else {
      var s = fibonacci(n - 1);
      return s.concat(s[s.length - 1] + s[s.length - 2]);
    }
  }


   console.log(fibonacci(5)); 