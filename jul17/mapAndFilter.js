const arr = [18, 21, 34, 23, 67, 34, 89];

arr.map((v) => console.log("Signature of ", v, " is taken"));

const filtered = arr.filter((v) => {
  return v < 30;
});

console.log(filtered);