import axios from "axios";

const API = {
  getPokemon: () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        return response.data;
      });
  },
  getAbility: (url) => {
    axios.get(url).then((response) => {
      return response.data.effect_entries[0].effect;
    });
  },
};

export default API;
