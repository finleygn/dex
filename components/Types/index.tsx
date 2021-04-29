import { FC } from 'react';
import styled from 'styled-components';
import { ElementType } from '../../api/types';

const typeColorMap = {
  [ElementType.DRAGON]: '#7038F8',
  [ElementType.ELECTRIC]: '#F8D030',
  [ElementType.BUG]: '#A8B820',
  [ElementType.DARK]: '#705848',
  [ElementType.FAIRY]: '#EE99AC',
  [ElementType.FIGHTING]: '#C03028',
  [ElementType.FIRE]: '#F08030',
  [ElementType.FLYING]: '#A890F0',
  [ElementType.GHOST]: '#705898',
  [ElementType.GRASS]: '#78C850',
  [ElementType.GROUND]: '#E0C068',
  [ElementType.ICE]: '#98D8D8',
  [ElementType.NORMAL]: '#A8A878',
  [ElementType.POISON]: '#A040A0',
  [ElementType.PSYCHIC]: '#F85888',
  [ElementType.ROCK]: '#B8A038',
  [ElementType.STEEL]: '#B8B8D0',
  [ElementType.WATER]: '#6890F0',
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;

const Tag = styled.span`
  padding: 6px 10px;
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: bold;
  border-radius: 6px;
  color: white;
  background-color: ${({ type }) => typeColorMap[type]};
`;

const Types: FC<{ types: ElementType[] }> = ({ types }) => {
  return (
    <Container>
      {types.map((type) => (
        <Tag key={type} type={type}>
          {type}
        </Tag>
      ))}
    </Container>
  );
};

export default Types;
