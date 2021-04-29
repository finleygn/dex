import { FC } from 'react';
import { Entity } from '../../api/types';
import Grid from '../../components/Grid';

const GridPage: FC<{ entity: Entity }> = ({ entity }) => {
  return <Grid type={entity} />;
};

export default GridPage;
