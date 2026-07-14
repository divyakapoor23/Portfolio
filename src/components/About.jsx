import photo from '../assets/Divya.jpeg'
// import photo from '../assets/lakechelan.jpeg'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>

      <div className="about-row">
        <div className="photo-col">
          <img src={photo} alt="Photo of Divya Kapoor" className="about-photo" />
        </div>

        <div className="text-col">
          <p className="bio">
            I'm graduating with an MS in Applied Data Science from Indiana University Indianapolis,
            where I built projects spanning the full data pipeline — from raw data ingestion to
            statistical analysis and deployed dashboards, including a sentiment analysis tool on
            Netflix viewer reviews and a predictive model on student outcome data. My focus has
            shifted toward data engineering — I'm drawn to building the pipelines and infrastructure
            that make data reliable at scale. I'm currently seeking data engineer roles where I can
            apply both skill sets.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About