"use client"

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { questions } from '../../data/questions'
import { useTheme } from '@mui/material';
import Link from 'next/link';


export default function Quiz() {
  const theme = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [points, setPoints] = React.useState({});
  const [result, setResult] = React.useState(null);

  const handleAnswerClick = (choice) => {
    // Update points for the selected personalityType
    setPoints((prevPoints) => ({
      ...prevPoints,
      [choice.personalityType]: (prevPoints[choice.personalityType] || 0) + choice.points
    }));

    // Move to the next question or finish the quiz
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Find the personalityType with the most points
    const maxPointsType = Object.keys(points).reduce((maxType, type) =>
      points[type] > (points[maxType] || 0) ? type : maxType, null
    );
    setResult(maxPointsType);
  };

  if (result) {
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
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component='div' gutterBottom align='center'>
            Your personality type is 
            <Typography variant="h4" color="info.main" sx={{my: 3}}>{result}</Typography>
          </Typography>
          <Link href="/" passHref>
            <Button variant='contained'>Try Again?</Button>    
        </Link>
        </Paper>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

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
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom align='center'>
          {currentQuestion.question}
        </Typography>
        {currentQuestion.choices.map((choice, index) => (
          <Button
            key={index}
            variant="contained"
            color='info'
            sx={{ mt: 2 }}
            onClick={() => handleAnswerClick(choice)}
          >
            {choice.answer}
          </Button>
        ))}
      </Paper>
    </Container>
  );
}
