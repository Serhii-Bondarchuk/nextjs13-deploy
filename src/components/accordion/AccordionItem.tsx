import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionType = {
  title: string;
  children?: string | ReactNode;
  defaultExpanded?: boolean;
};

function AccordionItem({
  title,
  children,
  defaultExpanded = false,
}: AccordionType) {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={title}
        id={title}
      >
        <span style={{ color: 'Highlight' }}>{title}</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
