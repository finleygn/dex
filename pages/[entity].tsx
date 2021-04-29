import { GetStaticPathsResult } from 'next';
import { FC } from 'react';
import { Entity } from '../api/types';
import GridPage from '../components/GridPage';

interface EntityPageProps {
  entity: Entity;
}

interface EntityPageStaticParams {
  params: {
    entity: Entity;
  };
}

const EntityPage: FC<{ entity: Entity }> = ({ entity }) => (
  <GridPage key={entity} entity={entity} />
);

export function getStaticPaths(): GetStaticPathsResult {
  const paths = Object.values(Entity).map((entity) => ({ params: { entity } }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: EntityPageStaticParams): { props: EntityPageProps } {
  return { props: { entity: params.entity } };
}

export default EntityPage;
