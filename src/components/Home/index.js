import React from "react";

function Home() {
    return(
        <section className="Home">
            <div className="profile">
                <h2 className="home-header">~ Welcome ~</h2>
              <div className="profile-txt">
                <p>
                  I'm so glad you're here! While visiting, you can explore my projects, resume, my story, and check out my <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer">LinkedIn</a> profiles, or reach out to me directly to learn more.
                </p>
                <p>
                  This website is a work in progress, so feel free to check back on occasion to see how it develops while I hone my techniques. 
                </p>
                <p>
                  Thanks for dropping by!
                </p>
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