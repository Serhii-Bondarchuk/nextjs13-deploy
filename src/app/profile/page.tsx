import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AccordionPage from '@/components/accordion/AccordionPage';
import './style.css';
import Title from '@/components/title/Title';

export default function Profile() {
  return (
    <>
      <Title title="Profile" />
      <AccordionPage />
    </>
  );
}
