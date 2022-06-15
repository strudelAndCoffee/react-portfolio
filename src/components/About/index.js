// ABOUT

import React, { useState } from "react";

function About() {
  const [bioImg] = useState([
    {
      src: 'portrait.png',
      alt: 'Stevie'
    }
  ]);

  let [ readMore, setReadMore ] = useState(false);

  function handleBtnClick(e) {
    e.preventDefault();
    setReadMore(true);
  }

  return (
    <section className="About">

      <form className="about-form">

        <div className="profile">
          <div className="profile-img-holder">
            <img
              src={require(`../../assets/images/${bioImg[0].src}`)}
              alt={bioImg[0].alt}
              class="profile-img"
            />
          </div>

          <div className="profile-txt-holder">
            <div className="profile-txt-banner">Brand Statement...</div>
            <div className="profile-txt">
              <span className="indent">"Full</span> stack web developer leveraging
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
              development."
            </div>
          </div>
        </div>

        <fieldset className="about-bio">
          <legend>
            <span className="color-2">About Me</span>
          </legend>
          <div className="about-bio-txt">
          <span className="indent">I</span> was born and raised in Austin, Texas, and still call it home. The person I am today was shaped by this city, my family, the lifelong friends I've made here, and the city's many communities, as is evident in my history thus far.
          <br />
          <br />
          <span className="indent">I</span> gained my primary education in the Austin Area Home Schoolers community, got my A.A. Degree in French from Austin Community College, and recently completed the Full Stack Web Development Code Bootcamp Certificate Program at the University of Texas. With over a decade of audio engineering experience, including recording, mixing/mastering, music production and performance, both in-studio and on-stage, and serving long-term positions at two local community staples (H-E-B groceries and The Soup Peddler restaurant,) I have been rewarded with my current life's worth of living, working, and playing in this rapidly changing city, and hope to continue to do so as we advance forward.
          {readMore ? (
            <div>
              <br />
              <span className="indent">Having</span> worked along side a wide spectrum of colorful humans, I hope to offer my unique experience and ever-evolving perspective to the professional endeavors I may find myself in. I will always hold onto my love of music, and will never abandon its creative outlets completely, but as I begin my change in careers, I will devote my time and energy fully to the fascinating and engaging field of website development! I am excited to keep up with new technologies, collaborate on challenging projects, and find creative solutions to unrehearsed problems. Though my coding qualifications are still in early development, I believe that my expertise in learning and self-teaching will allow me to quickly adapt and forge ahead in any unknown situation.
              <br />
              <br />
              <span className="indent">My</span> time so far has taught me that curiosity, commitment, kindness, originality, passion, and non-stop learning are what I value most. Lastly, I believe that in pursuing one's ambitions, to never doubt that success comes from learning through failure and set-backs, and through any type of change, the importance of nurturing culture, art and diversity should never be disregarded or deemed non-essential. These principles guide my direction as I seek new opportunities.
              <br />
              <br />
              <span className="indent">Thank</span> you for taking the time to learn about me - Please enjoy exploring my portfolio, and feel free to checkout out my social platforms, or contact me directly to learn even more! :)
              <br />
              <br />
              Stay weird, 
              <br />
              <span className="indent-sm">~Stevie</span>
              </div>
          ) : (
            <div className="readmore-btn-container">
              <button onClick={handleBtnClick} className="readmore-btn">Read More?</button>
            </div>
          )}
          </div>
        </fieldset>
      </form>
      

      {/* <form className="bio-form">
        
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
                <span className="grow">
                Austin has been my home my whole life, and it is my dream to continue to work, play, and create here 
                in the city that I love.
                </span>
                <br />
                <br />
              </div>

            </div>

            <div className="bio-form-bottom">

              <div className="bio-text">
                I have been a musician and recording/mixing engineer for over a decade, but my work ethic and 
                ambition pushes beyond the scope that working in the music business offers.
                <br />
                <br />
                This is why I am devoting my time and talents to grow in the diverse field of web development.
                I am eager to engage fully in the profession and offer my unique perspective, people skills,
                and problem solving approaches. I have found that the creativity involved in building websites
                and applications parallels the process of creating music, both individually and collaboratively. 
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

      </form> */}

    </section>
  );
}

export default About;
