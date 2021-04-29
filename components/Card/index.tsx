import React, { FC, useMemo } from 'react';
import { AspectRatio, Loader, Text } from '@strikelabs/luna';
import { useQuery } from 'react-query';
import entity from '../../api/entity';
import { Entity, ListResponseItem } from '../../api/types';
import {
  Container,
  Image,
  LikeContainer,
  Overlay,
  OverlayImage,
  TypesContainer,
  NameText,
} from './style';
import Like from '../Like';
import Types from '../Types';

interface CardProps extends ListResponseItem {
  type: Entity;
  liked: boolean;
  toggleLike(id: number): void;
}

interface CardContent {
  content: JSX.Element;
  overlay: JSX.Element;
}

function typeRender(type: Entity, id: number, name: string, data): CardContent {
  switch (type) {
    case Entity.POKEMON: {
      return {
        overlay: (
          <>
            <TypesContainer>
              <Types types={data.types} />
            </TypesContainer>
          </>
        ),
        content: (
          <>
            <Text color="captionText" bold>
              {`${id}`.padStart(4, '0')}
            </Text>
            <Image src={data.sprite} />
            <OverlayImage src={data.sprite} />
            <NameText as="h2" color="captionText" bold>
              {name}
            </NameText>
          </>
        ),
      };
    }
    case Entity.ITEM: {
      return {
        overlay: null,
        content: (
          <>
            <Text color="captionText" bold>
              {`${id}`.padStart(4, '0')}
            </Text>
            <Image src={data.sprite} />
            <OverlayImage src={data.sprite} />
            <NameText as="h2" color="captionText" bold>
              {name}
            </NameText>
          </>
        ),
      };
    }
  }
}

const Card: FC<CardProps> = ({ id, name, type, toggleLike, liked }) => {
  const { data, isLoading } = useQuery([type, id], () => entity[type](id));

  const card = useMemo<CardContent>((): CardContent => {
    return isLoading ? null : typeRender(type, id, name, data);
  }, [isLoading]);

  return (
    <AspectRatio x={1} y={1}>
      <Container>
        {isLoading ? (
          <Loader fullSize bg="transparent" />
        ) : (
          <>
            {card.content}
            <Overlay>{card.overlay}</Overlay>
            <LikeContainer onClick={() => toggleLike(id)}>
              <Like liked={liked} />
            </LikeContainer>
          </>
        )}
      </Container>
    </AspectRatio>
  );
};

export default React.memo(Card);
