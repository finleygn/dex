import styled from 'styled-components';
import { Text } from '@strikelabs/luna';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.2s;
`;

export const NameText = styled(Text)`
  position: absolute;
  bottom: calc(${({ theme }) => theme.spacing.sm} - 4px);
  right: calc(${({ theme }) => theme.spacing.sm} - 4px);
  transform: translateX(50%) rotate(-90deg) translate(calc(50% - 10px), -50%);
  text-transform: uppercase;
  text-align: right;
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  transition: filter 0.2s;
  pointer-events: none;
`;

export const Container = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  background: white;
  padding: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover > ${Overlay} {
    opacity: 1;
  }
`;

export const OverlayImage = styled.img`
  position: absolute;
  width: 200%;
  top: -50%;
  right: 0;
  bottom: 0;
  left: -50%;
  filter: blur(80px);
  z-index: 1;
  transform: rotate(180deg);
`;

export const LikeContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: calc(${({ theme }) => theme.spacing.sm} - 4px);
  right: calc(${({ theme }) => theme.spacing.sm} - 4px);
  padding: 4px;
  cursor: pointer;
`;

export const TypesContainer = styled.div`
  z-index: 9;
  position: absolute;
  bottom: calc(${({ theme }) => theme.spacing.sm} - 4px);
  left: calc(${({ theme }) => theme.spacing.sm} - 4px);
`;
