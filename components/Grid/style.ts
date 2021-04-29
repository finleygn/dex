import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

export const LoaderContainer = styled.div`
  height: 200px;
  position: relative;
  width: 100%;
`;
