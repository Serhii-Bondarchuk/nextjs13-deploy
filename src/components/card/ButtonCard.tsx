'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import path from 'path';

function ButtonCard(props: { id: string }) {
  const pathName = usePathname();
  // console.log(pathName, 'tttttt');
  const sss = path.parse(pathName);
  // console.log(sss, 'sssss');

  if (sss.dir === '/projects') {
    return null;
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
