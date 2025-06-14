export function add(numbers: string) {
  if (numbers === "") return 0;

  if (numbers.length === 1) return Number(numbers);

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [delimiterLine, ...rest] = numbers.split("\n");
    const customDelimiter = delimiterLine.slice(2);
    delimiter = new RegExp(customDelimiter, "g");
    numbers = rest.join();
  }

  return numbers.split(delimiter).reduce((sum, n) => sum + Number(n), 0);
}
