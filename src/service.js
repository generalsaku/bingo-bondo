import { getBingo, saveBingo } from "./storage.js";
import generate from "./generation/generate.js";
import validate from "./validation/validate.js";

export const load = async () => {
  let bingo = await getBingo();
  if (!bingo) {
    bingo = generate();
    await saveBingo(bingo);
  }
  return bingo;
};

export const createNew = async () => {
  const bingo = generate();
  await saveBingo(bingo);
  return bingo;
};

export const toggle = async (bingo, option) => {
  option.active = !option.active;
  await saveBingo(bingo);
};

export const verify = async () => {
  const bingo = await getBingo();
  const selectedOptions = bingo.filter((option) => option.active);
  return validate(selectedOptions);
};
