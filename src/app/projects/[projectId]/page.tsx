import Link from 'next/link';
import React from 'react';

type ProjectType = {
  params: {
    projectId: string;
  };
};

function Project({ params }: ProjectType) {
  const { projectId } = params;
  return (
    <div>
      <h1>
        <Link href="/">Home</Link>
      </h1>
      Project {projectId}
    </div>
  );
}

export default Project;
