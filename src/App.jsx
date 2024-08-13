import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My MUI App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <Box>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. eget. Suspendisse malesuada lacus ex, sit amet blandit
                  leo lobortis eget. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Suspendisse malesuada lacus ex, sit
                  amet blandit leo lobortis eget. eget. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. eget. Suspendisse malesuada lacus ex, sit amet blandit
                  leo lobortis eget. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Suspendisse malesuada lacus ex, sit
                  amet blandit leo lobortis eget. eget. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Suspendisse malesuada lacus ex, sit amet blandit leo
                  lobortis eget. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget. Suspendisse malesuada lacus ex, sit
                  amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
