import { Entity } from '../types';
import pokemon from './pokemon';
import item from './item';

const entity = {
  [Entity.POKEMON]: pokemon,
  [Entity.ITEM]: item,
};

export default entity;
