import React from 'react';
import furrever   from './Assets/Images/Projects/FurreverHomepage.png';
import furreverGif from './Assets/Images/Projects/Animated/furrever.gif'
import anon from './Assets/Images/Projects/landingpage.png'
import anonGif from './Assets/Images/Projects/Animated/anonprofile.gif'
import weather from './Assets/Images/Projects/pocketscreenshot.png'
import quiz from './Assets/Images/Projects/quizscreenshot.png'
import quizGif from './Assets/Images/Projects/Animated/CodeQuiz.gif'

export const projects = [
    {
        id: 1,
        title: 'Furrever',
        description: 'web based social media platform designed to help get fostered animals adopted and provide information that will help keep them adopted.',
        image: `${furrever}`,
        animated: `${furreverGif}`,
        link: 'https://enigmatic-gorge-61389.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Anonymous Profile Generator',
        description: 'web based application which will randomly generate a profile picture and bio asset for users to help quickly build an anonymous social media profile.',
        image: `${anon}`,
        animated: `${anonGif}`,
        link: 'https://dmerk2.github.io/Anon-Profile-Generator/',
    },
    {
        id: 3,
        title: 'Weather Pocket',
        description: 'web based application utilizing the Open Weather API to give users the current and future weather conditions of their queried location.',
        image: `${weather}`,
        link: 'https://coffeeeyes28.github.io/weather-pocket/'
    },
    {
        id: 4,
        title: 'Coding Quiz',
        description: 'A short quiz that tests users basic knowledge of JavaScript',
        image: `${quiz}`,
        animated: `${quizGif}`,
        link: 'https://coffeeeyes28.github.io/A-Code-Quiz/'
    }
    
]

