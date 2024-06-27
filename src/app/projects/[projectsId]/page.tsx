import ProjectCard from '@/components/card/Card';
import React from 'react';
import './style.css';
import { Typography } from '@mui/material';

type ProjectPageType = {
  params: {
    projectId: string;
  };
};

async function ProjectPage({ params }: ProjectPageType) {
  const { projectId } = params;
  console.log(projectId, 'PPPPPPPPPPP');
  // const url = `http://localhost:3000/api/projects/${projectId}`;
  const url = `https://nextjs13-deploy.vercel.app/api/projects/${projectId}`;

  async function getProjectById() {
    const response = await fetch(url);
    return response.json();
  }

  const project = await getProjectById();

  console.log(projectId, 444444444);
  return (
    <div className="projectDetail">
      <Typography variant="h4" padding="20px">
        Project details
      </Typography>
      <ProjectCard
        // project={{
        //   _id: '',
        //   name: '',
        //   description: '',
        // }}
        project={project}
      />
    </div>
  );
}

export default ProjectPage;
