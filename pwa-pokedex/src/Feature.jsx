import Nullstack from "nullstack";
import PokeFeature from "./components/PokeFeature";

class Feature extends Nullstack {
  name = "";
  number = 0;
  pokeList = [];

  async fetchPokeData({ pokeNumber }) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`
    );
    const data = await response.json();
    console.log(data.id);
    console.log(data.name);
    return {
      number: data.id,
      name: data.name,
      type: data.types[0].type.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`,
    };
  }

  async initiate({ page, params }) {
    const promises = [];
    this.name = params.name;
    promises.push(this.fetchPokeData({ pokeNumber: params.name }));
    const pokeList = await Promise.all(promises);
    this.pokeList = pokeList;

    if (pokeList) {
      page.title = pokeList.name;
      Object.assign(this, pokeList);
    } else {
      page.title = params.name;
      this.name = params.name;
      page.status = 404;
    }
  }

  renderPokeList() {
    console.log("renderPokelist", this.pokeList);
    return (
      <div class="flex flex-wrap gap-2">
        {this.pokeList.map((pokeData) => (
          <PokeFeature pokeData={pokeData} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-3 px-4 py-5">
        <PokeList />
      </section>
    );
  }
}

export default Feature;
