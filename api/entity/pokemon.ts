import base from './base';
import { Pokemon, PokemonResponse, Entity, ElementType } from '../types';

function pokemon(id: number): Promise<Pokemon> {
  return base<Pokemon, PokemonResponse>({
    id,
    name: Entity.POKEMON,
    transform: ({ id, name, height, weight, sprites, types }) => {
      return {
        id,
        name,
        height,
        weight,
        sprite: sprites.other['official-artwork'].front_default,
        types: types.map((type) => type.type.name as ElementType),
      };
    },
  });
}

export default pokemon;
