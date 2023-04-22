
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Amal</h2>
        <div className="prompt">
          <p>
            My name is Amal and I started studying computer science on 09/1//2022 and I didn't think it would be so interesting. Now I have a lot of motivation and a desire to continue studying, since I have goals for 2023 that I want to achieve and coding will help me with this.This is not all about me, I will write more 
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
     </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React, NPM, BootStrap, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home
