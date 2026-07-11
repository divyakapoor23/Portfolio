import photo from '../assets/Divya.jpeg'
function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <img src={photo} alt="Photo of Divya Kapoor" className="about-photo" />
      <p className="bio">
        I'm graduating with an MS in Applied Data Science from Indiana University Indianapolis,
        where I built projects spanning the full data pipeline — from raw data ingestion to
        statistical analysis and deployed dashboards, including a sentiment analysis tool on
        Netflix viewer reviews and a predictive model on student outcome data. My focus has
        shifted toward data engineering — I'm drawn to building the pipelines and infrastructure
        that make data reliable at scale. I'm currently seeking data engineer roles where I can
        apply both skill sets.
      </p>
    </section>
  )
}

export default About