'use client';

import {Typography} from '@mui/material';
import {Suspense} from 'react';

export default function IndexPage() {
  return (
    <Suspense>
      <Typography variant="h1">Home Page</Typography>
    </Suspense>
  );
}
