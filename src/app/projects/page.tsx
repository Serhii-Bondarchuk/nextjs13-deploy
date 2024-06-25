import React, { Suspense } from 'react';

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
    return await response.json();
  };

  const projectsList: ProjectsType[] = await getAllProjects();

  return (
    <div>
      <h1>Projects List content!!!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {projectsList.map((project, index: number) => {
          return (
            <>
              <h1>{project.name}</h1>
              <h3>
                {index + 1}
                {'. '}
                {/* <Link href={`/projects/${project._id}`}> */}
                {project.description}
                {/* </Link> */}
              </h3>
            </>
          );
        })}
      </Suspense>
    </div>
  );
}

export default ProjectsList;
