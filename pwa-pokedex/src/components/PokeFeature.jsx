import { twMerge } from "tailwind-merge";
import Arrowicon from "../icons/ArrowIcon";

export default function PokeFeature({ pokeData }) {
  console.log(pokeData);
  const { number, name, type, sprite } = pokeData;
  return (
    <figure
      class={twMerge(
        "flex h-52 w-52 flex-col overflow-hidden rounded-lg border border-gray-700",
        `border-${type}`
      )}
    >
      <div class="m-0 flex">
        <span class="p-4">
          <button>
            <a href="/">{<Arrowicon />}</a>
          </button>
        </span>
        <span class="w-full p-3  text-base">{name}</span>
        <span class="w-full p-4 text-right text-xs">
          #{String(number).padStart(3, "0")}
        </span>
      </div>
      <img
        src={sprite}
        alt=""
        class="aspect-square w-20 self-center"
        loading="lazy"
      />
      <figcaption
        class={twMerge(
          "mt-auto bg-gray-300 p-1 text-center capitalize text-white"
          // `bg-${type}`,
        )}
      >
        <h1 class="text-2xl font-bold">About</h1>
      </figcaption>
    </figure>
  );
}
