import { createContext, FC, useCallback, useState } from 'react';
import { Entity } from '../api/types';

type Like = {
  entity: Entity;
  id: number;
};

export interface Context {
  toggleLike(like: Like): void;
  isLiked(like: Like): boolean;
}

export const FavouriteContext = createContext<Context>({} as Context);

const FavouriteProvider: FC = ({ children }) => {
  const [likes, setLikes] = useState<{
    [key: string]: Set<number>;
  }>({});

  const toggleLike = useCallback(
    (like: Like) => {
      setLikes((prevLikes) => {
        const newSet = new Set(prevLikes[like.entity] || []);

        if (newSet.has(like.id)) {
          newSet.delete(like.id);
        } else {
          newSet.add(like.id);
        }

        return { ...prevLikes, [like.entity]: newSet };
      });
    },
    [likes]
  );

  const isLiked = useCallback(
    (like: Like) => {
      if (likes[like.entity]) {
        return likes[like.entity].has(like.id);
      }
      return false;
    },
    [likes]
  );

  return (
    <FavouriteContext.Provider value={{ toggleLike, isLiked }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
