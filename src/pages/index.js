import React from "react";
import styles from "./index.module.css";
import { Gramophone, Building, MusicalNote, GitHub, LinkChain } from "./icons";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

const Project = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <a href={props.link}>
          <h3 style={{ color: "black" }}>{props.title}</h3>
        </a>
        {props.description}
        <br />
        <br />
        <a href={props.link}>
          <LinkChain />
        </a>{" "}
        <a href={props.github}>
          <GitHub />
        </a>
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};

const About = () => {
  return (
    <>
      {" "}
      <p>
        I'm a New York-based software engineer with experience in the music
        industry.
      </p>
      <p>
        I'm interested in backend development, data engineering, and cloud
        infrastructure.
      </p>
      <p>
        I'm especially interested in the intersection of entertainment and
        technology. I want to:
      </p>
      <ul>
        <li>build data-driven consumer products</li>
        <li>improve financial systems in the music and talent industries</li>
        <li>design business tooling for artists and creatives</li>
      </ul>
      <p>
        Before software, I was a finance manager and royalties analyst in Los
        Angeles. My previous employers include{" "}
        <a href="https://www.universalmusic.com/">Universal Music Group</a>,{" "}
        <a href="https://88nightmarket.com/">88rising</a>, and{" "}
        <a href="http://spiritmusicgroup.com/">Spirit Music Group</a>.
      </p>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Here's a copy of my resume.
        </a>
      </p>
      <p>Outside of work, you can find me:</p>
      <ul>
        <li>algoraving in Supercollider</li>
        <li>playing piano/bansuri</li>
        <li>hiking</li>
        <li>
          trying to photograph the elusive Great Blue Heron that lives down the
          road
        </li>
      </ul>
    </>
  );
};

export default function Home() {
  var widthVal = "75%";
  return (
    <Container>
      <div>
        <img
          src="profile.jpg"
          style={{
            width: "25%",
            height: "25%",
            borderRadius: "50%",
            border: "6px solid black",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Hi! I'm Azhad.
      </h1>
      <About />
      <h1>Projects</h1>
      <Project
        title="NYC Rent Estimator"
        link="https://howmuchrent.herokuapp.com/"
        github="https://github.com/azhadsyed/housing"
        description="A machine learning app that uses Craiglist data to suggest rent prices in NYC. Implemented using random forests. Built in Python using Pandas, Scikit-learn and Flask/Gunicorn."
      >
        <Building width={widthVal} />
      </Project>
      <Project
        title="Passnotes"
        link="https://passnotes.herokuapp.com/"
        github="https://github.com/azhadsyed/passnotes-react"
        description="A musical social media app. Message boards are password-protected by short songs instead of alphanumeric passwords. Built in JavaScript using React, Express, Tone.js and MongoDB."
      >
        <MusicalNote width={widthVal} />
      </Project>
      <Project
        title="Hot or Not: Analyzing the Billboard Hot 100"
        link="https://towardsdatascience.com/hot-or-not-analyzing-60-years-of-billboard-hot-100-data-21e1a02cf304"
        github="https://github.com/azhadsyed/billboard-hot-or-not"
        description="A data-driven essay on the state of the music industry, based on the Billboard Hot 100 charts. Data cleaned and analyzed in Python using Pandas, Numpy, and visualized with Plotly."
      >
        <Gramophone width={widthVal} />
      </Project>
      <h1>Contact</h1>
      <ContactForm />
      <br />
      <Footer />
    </Container>
  );
}
