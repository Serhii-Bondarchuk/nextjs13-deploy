'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';

function ButtonCard(props: { id: string }) {
  const { back } = useRouter();
  const pathName = usePathname();
  const { dir } = path.parse(pathName);

  if (dir === '/projects') {
    return (
      <Button
        size="small"
        variant="contained"
        color="success"
        onClick={() => back()}
      >
        Back
      </Button>
    );
  }
  return (
    <>
      <Button size="small">
        <Link href={`/projects/${props.id}`}>Learn More</Link>
      </Button>
    </>
  );
}

export default ButtonCard;
