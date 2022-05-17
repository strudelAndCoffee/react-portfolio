// ABOUT

import React, { useState } from "react";

function About() {
  const [bioImg] = useState([
    {
      src: 'portrait.png',
      alt: 'Stevie'
    }
  ]);

  return (
    <section className="About">

      <form className="bio-form">
        
        <fieldset>
          <legend>
            <span className="color-2">About Me</span>
          </legend>

            <div className="bio-form-top">

              <div className="bio-img">
                <img
                  src={require(`../../assets/images/${bioImg[0].src}`)}
                  alt={bioImg[0].alt}
                  class="bio-img"
                />
              </div>
              <div className="bio-text">
                I am currently studying to become a full stack web developer at The University of Texas in Austin.
                <br />
                <br />
                Austin has been my home my whole life, and it is my dream to continue to work, play, and create here 
                in the city that I love.
                <br />
                <br />
              </div>

            </div>

            <div className="bio-form-bottom">

              <div className="bio-text">
                I have been a musician and recording/mixing engineer for over a decade, and will never retire
                from pursuing those passions, but my work ethic and ambition pushes beyond the scope that working
                in the music business offers.
                <br />
                <br />
                This is why I am devoting my time and talents to grow and excel in the diverse field of web
                development. I am eager to engage fully in this new profession and offer my unique perspective,
                as the problem solving and creativity involved in building websites and applications parallels the
                process of creating music, both individually and collaboratively. 
                <br />
                <br />
                To reach me directly, please click the Contact tab, or email me at my email address listed below.
                You can also visit my GitHub and LinkedIn profiles.
                <br />
                <br />
                <div className="bio-sig">
                  Thanks for visiting!
                  <br />
                  ~Stevie, a.k.a. strudelAndCoffee
                </div>
              </div>

            </div>

        </fieldset>

      </form>

    </section>
  );
}

export default About;
