export function add(numbers: string) {
  if (numbers === "") return 0;

  if (numbers.length === 1) return Number(numbers);

  let delimiter = /;|,|\n|</;

  return numbers.split(delimiter).reduce((sum, n) => sum + Number(n), 0);
}

console.log(add("1,\n1;2"));
