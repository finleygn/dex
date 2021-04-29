import { FC } from 'react';
import { Entity } from '../api/types';
import GridPage from '../components/GridPage';

const Home: FC = () => <GridPage entity={Entity.POKEMON} />;

export default Home;
