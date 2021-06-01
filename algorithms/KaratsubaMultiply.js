const KaratsubaMultiply = (x, y) => {
  /**
   ** Karatsuba multiplication algorithm
   *@param x Nx digits number;
   *@param y Ny digits number;
   ** Algorithm :
   ** separate x by 2 digits number [a (m digit number) , b (Nx-m digit number)]
   ** separate y by 2 digits number [c (m digit number) , d (Ny-m digit number)]
   ** where m = min(Nx,Ny) - 1
   ** step 1: calc a*c recursively
   ** step 2: calc b*d recursively
   ** step 3: calc (a+b)*(c+d) recursively
   ** step 4: calc (a*b+b*c) from equation [using previos steps] => (3)-(2)-(1)
   ** step 5: calc result from equation 10**(2*n) * a*c + 10**(n) * (a*b+d*c) + b*d
   */
  const xDigits = x.toString().split("").length;
  const yDigits = y.toString().split("").length;
  const n = Math.min(xDigits, yDigits) - 1;
  if (n == 0) return x * y;

  const a = Math.floor(x / 10 ** n);
  const b = Math.floor(x % 10 ** n);
  const c = Math.floor(y / 10 ** n);
  const d = Math.floor(y % 10 ** n);

  const ac = KaratsubaMultiply(a, c);
  const bd = KaratsubaMultiply(b, d);
  const AplusBmultCplusD = KaratsubaMultiply(a + b, c + d);
  const middlePart = AplusBmultCplusD - ac - bd;
  return 10 ** (2 * n) * ac + 10 ** n * middlePart + bd;
};

module.exports = KaratsubaMultiply;
