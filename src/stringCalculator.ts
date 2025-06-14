export function add(numbers: string) {
  if (numbers === "") return 0;

  if (numbers.length === 1) return Number(numbers);

  return numbers.split(",").reduce((sum, n) => sum + Number(n), 0);
}
