import React from 'react'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import '../../App.css'
import map from './map.webp'

const Home = () => {
    return (
        <>
            <div className='header'>
                <Typography variant='h4' sx={{ fontFamily: 'Roboto Slab', }} gutterBottom>
                    Guess the Flag! 🌎
                </Typography>
                <img src={map} alt='map' style={{ width: '600px', height: 'auto' }} />
                <Typography variant='h4' sx={{ paddingTop: '10px', fontFamily: 'Roboto Slab', }}>Test your flag knowledge</Typography>
            </div >
            <div className='home__button'>
                <Link to="/game" style={{ textDecoration: 'none' }}>
                    <Button variant='contained' sx={{
                        margin: '5px', fontFamily: 'Roboto Slab', display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "44px",
                        padding: "0 25px",
                        boxSizing: "border-box",
                        borderRadius: 0,
                        background: "#4f25f7",
                        color: "#fff",
                        transform: "none",
                        boxShadow: "6px 6px 0 0 #c7d8ed",
                        transition: "background .3s,border-color .3s,color .3s",
                        "&:hover": {
                            backgroundColor: "#4f25f7"
                        }
                    }}>Start Game</Button>
                </Link>
            </div>
        </>
    )
}

export default Home
