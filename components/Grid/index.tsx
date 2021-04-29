import { Loader } from '@strikelabs/luna';
import React, { FC, useCallback, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import list from '../../api/list';
import { Entity } from '../../api/types';
import useFavourite from '../../hooks/useFavourite';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from '../Card';
import { Container, LoaderContainer } from './style';

interface GridProps {
  type: Entity;
}

const Grid: FC<GridProps> = ({ type }) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { isLiked, toggleLike } = useFavourite();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
    isFetching,
  } = useInfiniteQuery(
    type,
    ({ pageParam = 0 }) =>
      list({
        name: type,
        limit: 15,
        offset: pageParam * 15,
      }),
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length < lastPage.count / 20 ? pages.length : null;
      },
    }
  );

  useIntersectionObserver({
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
    target: loadMoreRef,
  });

  const onLike = useCallback(
    (id: number) => {
      toggleLike({
        entity: type,
        id,
      });
    },
    [type]
  );

  return (
    <>
      {status === 'loading' ? (
        <LoaderContainer>
          <Loader fullSize bg="transparent" />
        </LoaderContainer>
      ) : (
        <>
          <Container>
            {data.pages.map((page) =>
              page.results.map((result) => (
                <Card
                  key={result.id}
                  type={type}
                  toggleLike={onLike}
                  liked={isLiked({ entity: type, id: result.id })}
                  {...result}
                />
              ))
            )}
          </Container>
        </>
      )}
      <div ref={loadMoreRef}>
        {hasNextPage && (
          <LoaderContainer>
            {isFetching && <Loader fullSize bg="transparent" />}
          </LoaderContainer>
        )}
      </div>
    </>
  );
};

export default Grid;
