import { get, set } from "idb-keyval";

const key = "bingo";

export const getBingo = async () => await get(key);
export const saveBingo = async (bingo) => await set(key, copy(bingo));

const copy = (data) => JSON.parse(JSON.stringify(data));
