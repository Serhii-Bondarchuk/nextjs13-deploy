import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectsType } from '@/app/projects/page';
import './Card.css';
import Link from 'next/link';

import ButtonCard from './ButtonCard';

type ProjectCardType = {
  project: ProjectsType;
};

export default function ProjectCard({ project }: ProjectCardType) {
  const { description, name, _id } = project;

  return (
    <div className="card">
      <Card
        sx={{ minWidth: 275 }}
        style={{
          width: '-webkit-fill-available',
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            marginBottom="10px"
          >
            Project name
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <hr />
          <Typography sx={{ mb: 1.5 }} color="text.secondary" marginTop="50px">
            Description
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">
            <Link href={`/projects/${_id}`}>Learn More</Link>
          </Button> */}
          <ButtonCard id={_id} />
        </CardActions>
      </Card>
    </div>
  );
}
