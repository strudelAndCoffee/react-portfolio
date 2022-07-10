// ABOUT

import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";

function About() {

  let [ readMore, setReadMore ] = useState(false);

  function handleBtnClick(e) {
    e.preventDefault();
    e.target.className = "disappear";
    e.target.innerHTML = "<span></span>";
    setReadMore(true);

    try {
      fetch('http://localhost:3001/api/readmore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="About">
          
          <article className="about-bio">
            <h3 className="about-header">Long story short...</h3>
              <p>
                <span className="indent">I</span> was born and raised in Austin, Texas, and still call it home. The person I am today was shaped by this city, my family, the lifelong friends I've made here, and the city's many communities, as is evident in my history thus far.
              </p>
              <p className="readmore-btn-container">
                <button className="readmore-btn" onClick={handleBtnClick}>
                  Read More?
                  {readMore && (
                    <IconContext.Provider value={{ size: "1.8rem" }}>
                      <AiFillHeart />
                    </IconContext.Provider>
                  )}
                </button>
              </p>
          {readMore && (
            <>
              <p className="big-font">
                ~ ~ ~ ~ ~ ~ ~
              </p>
              <br />
              <p>
                <span className="indent">I</span> gained my primary education in the Austin Area Home Schoolers community, received my A.A. Degree in French from Austin Community College, and recently completed the Full Stack Web Development Code Bootcamp Certificate Program at the University of Texas. With over a decade of audio engineering experience, including recording, mixing/mastering, music production and performance, both in-studio and on-stage, and serving long-term positions at two local community staples (H-E-B groceries and The Soup Peddler restaurant,) I have been rewarded with my current life's worth of living, working, and playing in this rapidly changing city, and hope to continue to do so as we advance forward.
              </p>  
              <br />
              <p>
                <span className="indent">Having</span> worked along side a wide spectrum of colorful humans, I hope to offer my unique experience and ever-evolving perspective to the professional endeavors I may find myself in. I will always hold onto my love of music, and will never abandon its creative outlets completely, but as I begin my change in careers, I will devote my time and energy fully to the fascinating and engaging field of website development! I am excited to keep up with new technologies, collaborate on challenging projects, and find creative solutions to unrehearsed problems. Though my coding qualifications are still in early development, I believe that my expertise in learning and self-teaching will allow me to quickly adapt and forge ahead in any unknown situation.
              </p>
              <br />
              <p>
                <span className="indent">My</span> time so far has taught me that curiosity, commitment, kindness, originality, passion, and non-stop learning are what I value most. Lastly, I believe that in pursuing one's ambitions, to never doubt that success comes from learning through failure and set-backs, and through any type of change, the importance of nurturing culture, art and diversity should never be disregarded or deemed non-essential. These principles guide my direction as I seek new opportunities.
              </p>
            </>
          )}
          </article>
        {/* </fieldset> */}
      {/* </form> */}
    </section>
  );
}

export default About;
