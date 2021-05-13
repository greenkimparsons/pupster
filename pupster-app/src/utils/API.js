import axios from "axios";

export default {
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images/random");
  },
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};
