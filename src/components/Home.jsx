import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

function Home(){
  return(
    <>
      <div className="home">
        <main>
          <h1>TechStart</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems your face every day.
            we are leading tech company whose aim is to increase the problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>TechStar Is a Leading Tech Firm Company and Devlopment Your all Types of tech solutions .Our Mission is Customer Satisfaction Our Company has Been Work so Hard For Your Satisfaction and We are Reptuated In Information And Technologies Firm.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay: "1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}


export default Home;