import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  user-select: none;
`;

export const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const Svg = styled.svg`
  transition: transform 0.1s;
  transform: scale(1.1);

  &:active {
    transform: scale(0.95);
  }
`;
