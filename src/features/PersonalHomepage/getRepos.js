import axios from "axios";

export const getRepos = async () => {
  const response = await axios.get(
    "https://api.github.com/users/GrzegorzJendernal/repos"
  );
  return await response.data;
};
