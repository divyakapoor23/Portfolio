import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <section id="projects">
            <h2>Projects</h2>

            <ProjectCard
                title="Netflix sentiment Dashboard"
                description="Streamlit app analyzing audience sentiment on Netflix titles using VADER and spaCy, enriched with TMDB review data."
                tech="Python, Streamlit, Pandas, spaCy, Matplotlib, Numpy"
                link="https://github.com/divyakapoor23/NetflixTitlesDS"
            />

            <ProjectCard
                title="Student outcome prediction (OULAD)"
                description="Exploratory analysis and logistic regression model predicting student pass/fail outcomes from VLE engagement data, with leakage-aware model design."
                tech="Python, pandas, scikit-learn, SciPy"
                link="https://github.com/divyakapoor23/StudentPerformance"
            />

            <ProjectCard
                title="Yelp data pipeline"
                description="Data collection and processing pipeline for Yelp business data."
                tech="Python"
                link="https://github.com/divyakapoor23/YelpDL"
            />
        </section>
    )
}
export default Projects