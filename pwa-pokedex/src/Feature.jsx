import Nullstack from "nullstack";

class Feature extends Nullstack {
  async initiate() {
    console.log("Outra pagina");
  }
  render() {
    return (
      <form>
        <label> Which is the best? </label>
      </form>
    );
  }
}

export default Feature;
