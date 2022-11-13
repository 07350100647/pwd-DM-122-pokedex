import Nullstack from "nullstack";
import Home from "./Home";
import Feature from "./Feature";

import "../tailwind.css";

class Application extends Nullstack {
  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({ project }) {
    project.name = "Nullstack Poke Poll";
    project.domain = "nullstack.app";
    project.color = "#D22365";
  }

  prepare({ page }) {
    page.title = "Pokédex First Generation";
    page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <body class="bg-white font-poppins text-darkgray">
        <Head />
        <Home route="/" persistent />
        <Feature route="/:name" />
        {/* <Pokemon route="/:name" /> */}
      </body>
    );
  }
}

export default Application;
