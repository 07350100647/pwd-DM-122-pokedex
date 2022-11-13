import Nullstack from "nullstack";
import "./Search.scss";
import NumberSort from "./icons/NumberSort";
class Search extends Nullstack {
  async submitPoke1({ router }) {
    router.url = "/" + this.number;
  }

  async submitPoke() {
    //async submitPoke({ event }) {
    console.log("ESCOLHEU um pokemon");
    this.number = parseInt(event.target.value);
    console.log("Valor passado", this.number);
    this.entrada = this.number;
  }

  render({ worker }) {
    return (
      //<form onsubmit={this.submitPoke}>
      <form onsubmit={this.submitPoke1}>
        <input
          //bind={this.choice}
          type="number"
          //id="choice"
          placeholder="Search pokemon by a number"
          class="w-full rounded-lg border border-gray-300 p-2"
          value={this.number}
          oninput={this.submitPoke}
        />

        <button disabled={!!worker.queues.persistVote.length}>
          <NumberSort />
        </button>

        {this.message && <p>{this.message}</p>}
      </form>
    );
  }
}

export default Search;
