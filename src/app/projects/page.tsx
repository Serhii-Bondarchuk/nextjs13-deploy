import Link from 'next/link';
import React, { Suspense } from 'react';
// import

type ProjectsType = {
  _id: string;
  name: string;
  description: string;
};

async function ProjectsList() {
  const url = 'http://localhost:3000/api/projects';

  const timeRevalidationCache = 10;

  const getAllProjects = async () => {
    const response = await fetch(url, {
      // cache: 'force-cache',
      next: { revalidate: timeRevalidationCache },
    });
    const ttt = await response.json();
    console.log(ttt, 'WWWWWWWWWWWWWw');
    // const projectsList = await response.json();
    // console.log(projectsList, 'projectsList11111111111111');
    // return projectsList;
    return ttt;
  };

  const projectsList: ProjectsType[] = await getAllProjects();
  console.log(projectsList, 'projectsList22222222222222222222');

  if (projectsList.length > 0) {
    console.log(projectsList, '!!!!!!!!!');
  }

  return (
    <div>
      <h1>Projects List content1111111111</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {projectsList.map((project, index: number) => {
          console.log(typeof project._id);
          return (
            <>
              <h1>{project.name}</h1>
              <h3>
                {index + 1}
                {'. '}
                {project.description}
              </h3>
            </>
          );
        })}
      </Suspense>
      {/* <h3>
        <Link href="/projects/1">First project</Link>
      </h3>
      <h3>
        <Link href="/projects/1">Second project</Link>
      </h3>
      <h3>
        <Link href="/projects/1">Third project</Link>
      </h3> */}
    </div>
  );
}

export default ProjectsList;
