import React from "react";
import Navbar from "../componentes/Navbar"
import Head from 'next/head'
import Hero from '../componentes/Hero'
import Cards from '../componentes/Cards'
import Galeria from "../componentes/Galeria";
import Forms from "../componentes/Forms";
import Boton from "../componentes/Boton";
import Footer from "../componentes/Footer"


const Home = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Navbar></Navbar>
    <Hero></Hero>
    <Cards></Cards>
    <Galeria></Galeria>
    <Forms></Forms>
    <Boton></Boton>
    <Footer></Footer>
    
  </>
)

export default Home