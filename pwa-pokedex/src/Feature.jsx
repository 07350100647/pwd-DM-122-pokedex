import Nullstack from "nullstack";
import PokeCard from "./components/PokeCard";

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
  renderHeader() {
    return (
      <header class="flex gap-4">
        <h1 class="text-2xl font-bold">About</h1>
      </header>
    );
  }
  renderBody() {
    return (
      <body class="flex gap-4">
        <span class="pokemon">
          <h2>Pokemon: </h2>
        </span>
      </body>
    );
  }

  renderPokeList() {
    console.log("renderPokelist", this.pokeList);
    return (
      <div class="flex flex-wrap gap-2">
        {this.pokeList.map((pokeData) => (
          <PokeCard pokeData={pokeData} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-3 px-4 py-5">
        <nav>
          <a href="/"> Return </a>
        </nav>
        <Header />
        <Body />
        <PokeList />
      </section>
    );
  }
}

export default Feature;
