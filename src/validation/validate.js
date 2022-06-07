import combinations from "./bingo-combinations.json";

export default function (selectedOptions) {
  return combinations.some((combination) =>
    combination.every((values) => {
      const row = values[0];
      const cell = values[1];
      return selectedOptions.some(
        (option) => option.row === row && option.cell === cell
      );
    })
  );
}
