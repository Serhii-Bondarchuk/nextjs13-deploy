import * as React from 'react';
import { Typography } from '@mui/material';
import './Title.css';

export default function Title({ title }: { title: string }) {
  return (
    <>
      <Typography variant="h2" className="letter_3d" textAlign="center">
        {title}
      </Typography>
    </>
  );
}
