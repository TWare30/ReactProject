import axios from "axios";

const API = {
  getPokemon: () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        return response.data;
      });
  },
};

export default API;
