import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
`;

export const StyledA = styled.a<{ selected: boolean }>`
  font-family: monospace;
  font-size: 18px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    &:before {
      position: absolute;
      right: calc(100% + 6px);
      content: '>';
      opacity: 1;
      animation: ${blink} 0.6s infinite;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      &&:before {
        position: absolute;
        right: calc(100% + 6px);
        content: '>';
        animation: none;
      }
    `};
`;
