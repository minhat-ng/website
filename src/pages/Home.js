import React from "react";

import "../styles/Home.css";
import headshot from "../assets/headshot.png"

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="content-combine">
        <p>Hi! 👋 I'm Nhat Nguyen, a 2nd year Computer Science student at the University of Marland. This is where I keep myself busy with fun projects and occasionally update my <a href="/list100">list 100</a>.</p>
        <img src={headshot} alt="Heahshot" />
        </div>
          <p>I'm passionate about machine learning and web development. During my free time, I like reading about real-life AI applications and simple website designs (like <a href="https://motherfuckingwebsite.com/" target="_blank" >this 👀</a>). While ideas are fantastic, my stronger inclination is to bring them to life.</p>
          <p>Recently, I've been</p>
          <ul>
            <li>SWE intern @ <a href="https://www.grassrootsgrocery.org/">Grassroots Grocery</a></li>
          </ul>
          <p>I'm best reached via <a href="mailto: nhat.tm.ng@gmail.com" target="_blank">email</a>. Feel free to reach out for projects, work opportunities, or simply a coffee chat. I'm open to joining your team and always ready to build things! </p>
      </div>
    </div>
  );
}

export default Home;
