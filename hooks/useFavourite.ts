import { useContext } from 'react';
import { Context, FavouriteContext } from '../providers/FavouriteProvider';

const useFavourite = (): Context => {
  return useContext<Context>(FavouriteContext);
};

export default useFavourite;
