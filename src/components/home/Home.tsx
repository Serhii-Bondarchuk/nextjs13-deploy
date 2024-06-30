import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import picture from '../../../public/20-536x354.jpg';
import Image from 'next/image';
import './Home.css';

export default function MediaCard() {
  return (
    <Card className="home_card">
      <Image src={picture} alt={'foto'} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Serhii Bondarchuk - Software Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I have more then 4 (almoust 2,5 year in EPAM ) years of experience in
          software development (React, Next.js, Redux, ES6, Angular, Vue). I
          have experience to create Unit tests (React testing library),
          functional testing (on Java). I work with libraries jQuery, ECharts,
          axios, lodash, Redux-Saga, redux-thunk I work with Typescript. I am
          using Bootstrap and using SASS pre-processor for styling Ant Design,
          MUI, styled-components and Material UI. I know how to work with
          Monorepo. This one of the project which I did as Full stack developer
          (backend on Express, Node), (frontend - React), deployed on Vercel,
          with MongoDB (MERN application)
        </Typography>
      </CardContent>
    </Card>
  );
}
