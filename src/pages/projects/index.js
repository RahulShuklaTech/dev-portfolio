import React from 'react'
import Cards from '../../components/Cards'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Everyone Answers',
            description: "The project is made to solve a unique challenge been faced by teachers during online classes these days. Teachers can get a live feedback from students in response to question asked during class. This project will work as tool to check the students understanding in a online class or a classroom.",
            technologies: ['React', 'Redux', 'Node', 'Firebase Firestore', 'Material UI', 'Firebase Auth'],
            image: '/loginResized.png',
            link: 'https://modest-hugle-f3ed5a.netlify.app/',

        },
        {
            id:2,
            title: 'Devtalks',
            description:'The project is a social media website design for techies to share their thoughts and follow other users. The website is made from scratch including the custom login and signup which includes authentication and authorization done by Json Web Tokens. The technologies i have used for this are listed below.',
            technologies: ['React', 'Chakra UI', 'Node', 'Express', 'MongoDB', 'JWT','Mongoose', 'Axios', 'React Router'],
            image: '/dev.png',
            link: 'https://determined-pike-9e5056.netlify.app/',
        },
        {
            id:3,
            title: 'Movie Trailers',
            description:'Wanna see what movies are popular or what do you wanna watch next time you go out for a movie night, you can watch movie trailers check IMDB information for the movies before you go.',
            technologies: ['React', 'TMDB', 'React Router'],
            image: '/moveChosenResized.png',
            link: 'https://tender-roentgen-7191a9.netlify.app/',
        }

    ]

    return (
        <Layout>
            <div className = {styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects I Have Created</h3>
                <Cards projects = {projects}/>
            </div>
        </Layout>
    )
}
