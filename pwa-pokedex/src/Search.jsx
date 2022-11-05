import Nullstack from "nullstack";
import "./Search.scss";
import NumberSort from "./icons/NumberSort";
class Vote extends Nullstack {
  async submitPoke({ router }) {
    console.log("Escolheu um pokemon");
    router.url = `/feature`;
  }

  render({ worker }) {
    return (
      <form onsubmit={this.submitPoke}>
        <input
          bind={this.choice}
          id="choice"
          placeholder="Search pokemon by a number"
          class="w-full rounded-lg border border-gray-300 p-2"
        />

        <button disabled={!!worker.queues.persistVote.length}>
          <NumberSort />
        </button>

        {this.message && <p>{this.message}</p>}
      </form>
    );
  }
}

export default Vote;
