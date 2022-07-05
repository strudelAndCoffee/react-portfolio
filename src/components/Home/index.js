import React from "react";

function Home() {
    return(
        <section className="Home">
            <div className="profile">
                <h2 className="home-header">Welcome</h2>
            <div className="profile-txt">
              {/* <span className="indent">"Full</span> stack web developer leveraging
              over a decade of experience in audio engineering to provide
              creative solutions in website development and design. Recently
              earning a certificate from the Code Bootcamp at UT Austin,
              specializing in JavaScript and the MERN stack, Stephen is ready to offer excellent
              time management, work ethic, and attention to detail to a wide
              range of professional projects. Being flexible, reliable, quick to adapt,
              and known by colleagues as friendly and easy to work with
              in both large and small scale teams, as well as highly responsible
              and productive when working independently, Stephen is excited to
              apply his experience and passion in the diverse field of web
              development." */}
              <p>
              I'm so glad you're here!
              </p>
              <p>
              Please enjoy exploring my portfolio, and feel free to check out my <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer">LinkedIn</a> profiles, or reach out to me directly to learn more.
              </p>
              <p>
              Thanks for dropping by!
              </p>
              <br />
              <p>
                Stay weird,
                <br />
                ~ Stevie, a.k.a. strudelAndCoffee
              </p>
            </div>
            </div>
        </section>
    )
};

export default Home;