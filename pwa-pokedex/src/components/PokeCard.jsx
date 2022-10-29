export default function PokeCard({ pokeData }) {
  return (
    <figure class="border-grass flex h-36 w-28 flex-col overflow-hidden rounded-lg border">
      <span class="w-full p-2 text-right text-xs">#001</span>
      <img
        src={pokeData}
        alt=""
        class="aspect-square w-20 self-center"
        loading="lazy"
      />
      <figcaption class="bg-grass mt-auto text-center capitalize text-white">
        Bulbasaur
      </figcaption>
    </figure>
  );
}
