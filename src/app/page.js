import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        square={false}
        sx={{
          my: 4,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Personality Quiz
        </Typography>
        <Link href="/quiz">
            <Button variant='contained'>Start Quiz</Button>    
        </Link>

      </Paper>
    </Container>
  );
}