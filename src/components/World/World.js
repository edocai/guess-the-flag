import nations from './nations';
import 'flag-icons'
import '../../App.css';
import { useState, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';


const World = () => {
    const [country, setCountry] = useState([]);
    const [flagCountry, setFlagCountry] = useState({});
    const [score, setScore] = useState({ total: 0, correct: 0, incorrect: 0 });
    const [showAnswer, setShowAnswer] = useState(false);
    const [selected, setSelected] = useState({});

    const generateRandomNations = () => {
        let randomN = [];
        for (let i = 0; i < 4; i++) {
            const random = Math.floor(Math.random() * nations.length);
            randomN.push(nations[random]);
        }

        setCountry(randomN);
        const index = Math.floor(Math.random() * 4);
        setFlagCountry(randomN[index]);
    };

    const checkAnswer = (country) => {
        setSelected(country);
        if (country.name === flagCountry.name) {
            setScore({
                ...score,
                correct: score.correct + 1,
                total: score.total + 1,
            });
        } else {
            setScore({
                ...score,
                incorrect: score.incorrect + 1,
                total: score.total + 1,
            });
        }
        setShowAnswer(true);
        setTimeout(() => {
            setShowAnswer(false);
            nextQuestion();
        }, 1000);
    };

    const nextQuestion = () => {
        generateRandomNations();
    };

    useEffect(() => {
        generateRandomNations();
    }, []);

    return (
        <>
            <Container>
                <div className='header'>
                    <Typography variant='h4' sx={{ fontFamily: 'Roboto Slab' }} gutterBottom>
                        Guess the Flag! 🌎
                    </Typography>
                </div>
                <div className="App">
                    <div>
                        <Typography variant='h4' sx={{ fontFamily: 'Roboto Slab' }} >
                            Total : {score.total} | Correct : {score.correct} | Incorrect :{' '}
                            {score.incorrect}
                        </Typography>
                    </div>
                    {flagCountry.name ? (
                        <span
                            className={`fi fi-${flagCountry[
                                'alpha-2'
                            ].toLowerCase()}`}
                        ></span>
                    ) : null}

                    <div>
                        {country.map((c) => (
                            <Button key={c.name} variant='contained' sx={{ margin: '5px', fontFamily: 'Roboto Slab' }} onClick={(e) => checkAnswer(c)}>{c.name}</Button>
                        ))}
                    </div>

                    <div>
                        {showAnswer ? (
                            <h2
                                className={
                                    flagCountry.name === selected.name ? 'correct' : 'incorrect'
                                }
                            >
                                Correct : {flagCountry.name}
                            </h2>
                        ) : null}
                    </div>
                </div >
            </Container >
        </>
    );
}

export default World;