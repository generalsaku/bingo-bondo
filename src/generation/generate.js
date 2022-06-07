import options from "./bingo-options.json";
import shuffle from "../shuffle.js";

export default function () {
  return shuffle(options)
    .slice(0, 25)
    .map((option, index) => ({
      name: option,
      active: false,
      row: Math.floor(index / 5) + 1,
      cell: (index % 5) + 1,
    }));
}
