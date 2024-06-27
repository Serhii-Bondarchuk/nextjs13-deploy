import ProjectCard from '@/components/card/Card';
import React, { Suspense } from 'react';
import './style.css';
import { Typography } from '@mui/material';

export type ProjectsType = {
  _id: string;
  name: string;
  description: string;
};

async function ProjectsList() {
  // const url = 'http://localhost:3000/api/projects';
  const url = 'https://nextjs13-deploy.vercel.app/api/projects';

  const timeRevalidationCache = 10;

  const getAllProjects = async () => {
    const response = await fetch(url, {
      // cache: 'force-cache',
      next: { revalidate: timeRevalidationCache },
    });
    return await response.json();
  };

  const projectsList: ProjectsType[] = await getAllProjects();

  // const projectsList: ProjectsType[] = [
  //   {
  //     name: 'Project111',
  //     description: 'Description111',
  //     _id: '1',
  //   },
  //   {
  //     name: 'Project222',
  //     description: 'Description222',
  //     _id: '2',
  //   },
  //   {
  //     name: 'Project333',
  //     description: 'Description333',
  //     _id: '3',
  //   },
  // ];

  return (
    <>
      <Typography
        variant="h2"
        className="letter_3d"
        textAlign="center"
        marginBottom="50px"
      >
        Projects List
      </Typography>
      <div className="project_page">
        <Suspense fallback={<div>Loading...</div>}>
          {projectsList.map((project, index: number) => {
            console.log(project, 777777777777777);
            return (
              // <div
              //   key={project._id}
              //   style={{
              //     width: '25%',
              //   }}
              // >
              <>
                <ProjectCard project={project} />
              </>
              // </div>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}

export default ProjectsList;

// <h1>{project.name}</h1>
// <h3>
//   {index + 1}
//   {'. '}
//   {/* <Link href={`/projects/${project._id}`}> */}
//   {project.description}
//   {/* </Link> */}
// </h3>
