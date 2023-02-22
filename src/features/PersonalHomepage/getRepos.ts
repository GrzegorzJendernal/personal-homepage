import axios from "axios";
import { delay } from "./delay";

export const getRepos = async () => {
  await delay();
  const response = await axios.get(
    "https://api.github.com/users/GrzegorzJendernal/repos"
  );
  return await response.data;
};
