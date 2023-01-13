import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";
import React from "react";

import { UpIcon } from "../../../icons";

const Accordion = styled(MUIAccordion)(({ theme }) => ({
  border: "none",
  boxShadow: "none",
}));

const AccordionSummary = styled(MUIAccordionSummary)(({ theme }) => ({
  padding: "0",
}));

const Index: React.FC<{
  summary: React.ReactNode;
  content: React.ReactNode;
}> = ({ summary, content }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<UpIcon />}>{summary}</AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};

export default Index;