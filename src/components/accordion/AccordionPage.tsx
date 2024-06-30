import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './AccordionPage.css';
import AccordionItem from './AccordionItem';
import { Typography } from '@mui/material';

export default function AccordionPage() {
  return (
    <div className="accordion_container">
      <AccordionItem title="SUMMARY" defaultExpanded>
        I have more then 4 (almoust 2,5 year in EPAM ) years of experience in
        software development (React, Next.js, Redux, ES6, Angular, Vue). I have
        experience to create Unit tests (React testing library), functional
        testing (on Java). I work with libraries jQuery, ECharts, axios, lodash,
        Redux-Saga, redux-thunk I work with Typescript. I am using Bootstrap and
        using SASS pre-processor for styling Ant Design, MUI, styled-components
        and Material UI. I know how to work with Monorepo. This one of the
        project which I did as Full stack developer (backend on Express, Node),
        (frontend - React), deployed on Vercel, with MongoDB (MERN application)
        -{' '}
        <a href="https://mern-crud-client-frontend.vercel.app/">
          https://mern-crud-client-frontend.vercel.app/
        </a>
        {'. '}
        <br />
        &nbsp; I have good knowledge in:
        <li>
          creating responsive and adaptive websites for different kind of
          devices;
        </li>
        <li>creating reusable React, Angular, Vue components;</li>
        <li>good knowledge in maintaining and debugging;</li>
        <li>created Unit tests for React components;</li>
        <li>created functional test on Java language;</li>
        <li>did couple Interviews of candidates to the projects</li>
        <li>worked on those methodologies: (Scrum, Kanban)</li>
        <li>
          business areas: Care e-commerce, Business Information and Media,
          Software & Hi-Tech
        </li>
        <p>
          I always try to improve my skills and follow new technology stacks.
        </p>
        Also, I am working on the Back end with Next.js (SSR), working with
        Node.js(express). I worked with database MySQL, I know PHP language, I
        worked a little bit with docker, have the experience to work Node.js (it
        was mostly on freelance and for my own education ). I opened to new
        technology, I like to learn something new (I got Master's Degree from
        Vinnitsya National Technical University). I worked with GitHub,
        bitbucket, Jira.
      </AccordionItem>

      <AccordionItem title="SKILLS">
        <p>
          <em>Academic Disciplines</em>
        </p>
        <li>
          Applied Sciences: Electronics Engineering, AI Ethics, Common
          web-security knowledge, Design patterns, Switches
        </li>
        <p>
          <em>Engineering Practices</em>
        </p>
        <li>Intelligent Enterprise: Prompt Engineering</li>
        <li>
          Digital Engagement: CSS Fundamentals, Web Performance Analysis and
          Optimization, Front-End Development
        </li>
        <li>
          Advanced Technology: Debugging, Software Engineering Processes,
          Software Engineering Practices, Software Design, Expanded Electrical
          Engineering Fundamentals, Software Engineering Knowledge & Experience,
          Cloud Fundamentals, Electrical Engineering, PLC programming, Sensors
        </li>
        <p>
          <em>Industries</em>
        </p>
        <li>Energy & Resources: Electricity</li>
        <li>Consumer: E-commerce</li>
        <p>
          <em>Leadership & Soft Skills</em>
        </p>
        <li>Communication: Communication, Conflict management</li>
        <li>Teamwork and Collaboration: Teamwork and Collaboration</li>
        <li>Growth Mindset: Adaptability</li>
        <li>Ownership: Problem-solving, Ownership</li>
        <li>
          Diversity, Equity, and Inclusion: Diversity, Equity, and Inclusion
        </li>
        <p>
          <em>Technologies</em>
        </p>
        <li>Standard: HTTP, GraphQL</li>
        <li>
          Framework: ReactJS, Angular, Redux, VueJS, Bootstrap CSS, Next.js
        </li>
        <li>Data: MySQL</li>
        <li>
          Other: Document Object Model, JavaScript Profiling and Debugging,
          Node.js Core, REST API, Panels, Web Communication Protocols,
          JavaScript Documentation, Relay, Browser APIs, JavaScript Desktop
          Platform, JavaScript Development Tools, JavaScript Cross-Mobile
          Platform, JavaScript in Browser
        </li>
        <li>Library: Redux Saga, Lodash, Ramda, ...</li>
        <li>Web/Application Server: Node.js</li>
        <li>
          Computer Language: SASS/SCSS, TypeScript, SQL, HTML, CSS, JavaScript,
          GraphQL, Java, PHP
        </li>
        <li>
          Solution: GitHub, Microsoft Visio, MathCad, Jira, Visual Studio Code
        </li>
        <li>Platform: NPM</li>
      </AccordionItem>

      <AccordionItem title="EXPERIENCE">
        Software Engineer, responsibilities:
        <li>Created new features for the application, using UI library</li>
        <li>
          create reusable high-quality code components using best practices and
          check tools (es lint, Typescript, husky, CI/CD )
        </li>
        <li>debugging and fixing bugs</li>
        <li>
          created mock data to work with the app offline (WebSockets), adding
          analytics for tracing interaction events Tools and Technologies: Java,
          GitLab, CI/CD, GTM, React, Typescript, ESLint, Ant Design, ES6+, Redux
          Tool Kit (RTK Query), Docker, Lodash
        </li>
        <br />
        Software Engineer, responsibilities:
        <li>Migrate components from one application to a new one</li>
        <li>create new components according to tusks</li>
        <li>create unit tests</li>
        <li>make software analysis of future tasks (prepare for refinement)</li>
        <li>create new endpoints using SWR</li>
        <li>Fixed bugs</li>
        <li>
          code review Tools and Technologies: VS code, IntelliJ idea, SWR,
          Jenkins, Redux, ESLint, Prettier, Code spellchecker, husky,
          Typescript, +ES6, Lodash, SCSS
        </li>
        <br />
        React Developer, responsibilities:
        <li>Created new features for the application using UI library</li>
        <li>
          create reusable high-quality code components using best practices and
          check tools (es lint, Typescript, husky, CI/CD )
        </li>
        <li>debugging and fixing bugs</li>
        <li>
          created mock data to work with the app offline (WebSockets) Tools and
          Technologies: Java, GitLab, CI/CD, React, Typescript, ESLint, Ant
          Design, ES6+, Redux Tool Kit (RTK Query), Docker, Lodash
        </li>
        <br />
        React and Angular Developer, responsibilities:
        <li>
          I created new Components from an existing library (with my additional
          code)
        </li>
        <li>
          Everything was on Angular and I migrated every component from Angular
          to React
        </li>
        <li>I fixed bugs tickets, did code review to colleagues</li>
        <li>
          did a unit tests for every new component using React Testing Library
        </li>
        <li>did a functional test in Java</li>
        <li>
          Fixed some errors which was found by Jenkins (CI/CD process) Tools and
          Technologies: SQL, Applitools, Jenkins, VS code, InteliJ Idea, React,
          Angular, Java, Typescript, Redux, Redux-thunk, Selenium, RTL
        </li>
        <br />
        React developer, responsibilities:
        <li>fixed bugs</li>
        <li>changed layout according to the requirements</li>
        <li>implemented new features</li>
        <li>estimated and voted for tasks conducted code reviews</li>
        <li>
          I provided couple interviews for a future developers for this project
          Tools and Technologies: SQL, Adobe Experience Manager - AEM
          Development, VS code, IntelliJ idea, React, Java, HTML, SCSS, Maven,
          Docker
        </li>
      </AccordionItem>

      <AccordionItem title="CONTACTS">
        <ol>
          <li>
            <a href="mailto:Serhii_Bondarchuk1@epam.com">
              Serhii_Bondarchuk1@epam.com
            </a>
          </li>

          <li>
            <a href="mailto:amax9111@gmail.com">amax9111@gmail.com</a>
          </li>

          <li>
            <a href="https://github.com/Serhii-Bondarchuk">
              github repo - Serhii-Bondarchuk
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/serhii-bondarchuk-0086091a1/">
              www.linkedin.com/in/serhii-bondarchuk-0086091a1/
            </a>
          </li>
        </ol>
      </AccordionItem>

      <AccordionItem title="EDUCATION">
        <p>
          Name of the Education Establishment: VINNITSA NATIONAL TECHNICAL
          UNIVERSITY
        </p>
        <p>Faculty/College: Energetics and electrical engineering</p>
        <p>Specialty: Power Stations</p>
        <p>Degree (diploma): Master</p>
      </AccordionItem>
    </div>
  );
}
