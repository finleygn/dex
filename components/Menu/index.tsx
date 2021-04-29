import { Box } from '@strikelabs/luna';
import { capitalize } from '@strikelabs/pax';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';

import { Entity } from '../../api/types';
import { StyledA } from './style';

const Menu: FC = () => {
  const router = useRouter();

  return (
    <Box mt={1}>
      <img style={{ width: '140px' }} src="/pikapi.png" />
      <Box mt={2}>
        {Object.values(Entity).map((entity) => (
          <Box mb={2} key={entity}>
            <Link href={`/${entity}`} passHref>
              <StyledA selected={router.query.entity === entity}>
                {capitalize(entity)}
              </StyledA>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
