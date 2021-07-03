import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import ProjectsArea from '../ProjectsArea/ProjectsArea';
import Skills from '../Skills/Skills';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <>
            <Head></Head>
            <ProjectsArea></ProjectsArea>
            <Summary></Summary>
            <Skills></Skills>
            <Footer></Footer>
        </>
    );
};

export default Home;