import { Statement } from "../../types";

export async function fetchStatement(): Promise<Statement> {
  return await fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
