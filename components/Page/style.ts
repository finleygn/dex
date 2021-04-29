import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 1200px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  position: relative;
`;

export const MenuContainer = styled.div`
  flex: 1 0 240px;
  position: sticky;
  top: ${({ theme }) => theme.spacing.xl};
`;

export const ContentContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  min-width: 70%;
`;
