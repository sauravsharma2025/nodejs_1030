function test(num) {
  let collection = {
    M: " 1000",
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let i = 0; i < Object.keys(collection).length; i++) {
    if (num === 0) return "";
    if (num >= Object.values(collection)[i]) {
      console.log("SK@", Object.values(collection)[i]);
      return (
        Object.keys(collection)[i] + test(num - Object.values(collection)[i])
      );
    }
  }
}

export default test;
