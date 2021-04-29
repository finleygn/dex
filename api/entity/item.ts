import base from './base';
import { Entity, ItemResponse, Item } from '../types';

function item(id: number): Promise<Item> {
  return base<Item, ItemResponse>({
    id,
    name: Entity.ITEM,
    transform: ({ id, name, sprites }) => {
      return {
        id,
        name,
        sprite: sprites.default,
      };
    },
  });
}

export default item;
