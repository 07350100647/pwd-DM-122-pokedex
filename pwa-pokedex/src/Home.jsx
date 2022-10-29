import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import Counter from './Counter';

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`;
    page.description = `${project.name} foi feito com Nullstack`;
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a class="text-pink-500 ml-1" href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  renderActionLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a class="inline-block text-pink-500 mb-1" href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }) {
    return (
      <section class="w-full max-w-3xl min-h-screen my-0 mx-auto flex items-center p-6 flex-wrap md:flex-nowrap">
        <article class="w-full mb-5">
          <Link href="https://nullstack.app/pt-br">
            <div class="ml-1">
              <Logo height={60} light />
            </div>
          </Link>
          <h1 class="block font-crete-round tracking-widest font-bold text-lg mt-4"> {project.name} </h1>
          <p class="block mt-4"> {greeting} </p>
          <p class="block mt-4">
            Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
            <Link href="vscode://file/C:/tools/DM-122/pwd-DM-122-pokedex/pwa-pokedex/src">
              pasta src
            </Link>.
          </p>
          <ul class="block leading-snug mt-4">
            <li>
              <ActionLink href="https://nullstack.app/pt-br/componentes-renderizaveis">
                🎉 Crie seu primeiro componente 
              </ActionLink>
            </li>
            <li>
              <ActionLink href="https://nullstack.app/pt-br/rotas-e-parametros">
                ✨ Configure sua primeira rota
              </ActionLink>
            </li>
            <li>
              <ActionLink href="https://nullstack.app/pt-br/contexto">
                ⚡ Defina seu context
              </ActionLink>
            </li>
            <li>
              <ActionLink href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Dê uma estrela no github
              </ActionLink>
            </li>
            <li>
              <ActionLink href="https://youtube.com/nullstack">
                🎬 Se inscreva no nosso Canal do Youtube
              </ActionLink>
            </li>
          </ul>
           <span class="block mt-2">
            Dica: nós temos uma
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              Extensão para VS Code
            </Link>
          </span>
          <Counter />
        </article>
        <aside class="w-full">
          <Link href="https://nullstack.app/pt-br/waifu">
            <img class="w-full inline-block" src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;