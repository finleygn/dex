export enum Entity {
  POKEMON = 'pokemon',
  ITEM = 'item',
}

export enum ElementType {
  NORMAL = 'normal',
  FLYING = 'flying',
  POISON = 'poison',
  GRASS = 'grass',
  FIGHTING = 'fighting',
  WATER = 'water',
  BUG = 'bug',
  ROCK = 'rock',
  GROUND = 'ground',
  PSYCHIC = 'psychic',
  FIRE = 'fire',
  ICE = 'ice',
  GHOST = 'ghost',
  ELECTRIC = 'electric',
  FAIRY = 'fairy',
  STEEL = 'steel',
  DARK = 'dark',
  DRAGON = 'dragon',
}

/**
 * Lists
 */
export type ListRequest = {
  name: Entity;
  offset: number;
  limit: number;
};

export type ListResponseItem = {
  id: number;
  name: string;
};

export type ListResponse = {
  count: number;
  results: ListResponseItem[];
};

/**
 * Entities
 */

export type EntityNameToShape = {
  [Entity.POKEMON]: Pokemon;
  [Entity.ITEM]: Item;
};

export type EntityRequest<T, R> = {
  id: number;
  name: Entity;
  transform: (raw: R) => T;
};

export type PokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { other: { 'official-artwork': { front_default: string } } };
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: ElementType[];
  sprite: string;
};

export type ItemResponse = {
  id: number;
  name: string;
  sprites: { default: string };
};

export type Item = {
  id: number;
  name: string;
  sprite: string;
};
