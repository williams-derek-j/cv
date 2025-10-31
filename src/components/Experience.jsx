import "../styles/Experience.css"
import "../styles/Experience/PreviousJob.css"
import PreviousJob from "./Experience/PreviousJob.jsx"

function Experience() {
    return (
        <section id="" className="section-experience section">
            <h1 id="header-experience" className="header">Experience:</h1>
            <form id="form-experience" className="form">
                <div id="workHistory" className="component">
                    <PreviousJob />
                    <PreviousJob />
                </div>
                <button id="button-submit" className="button">Submit</button>
            </form>
            <button id="button-edit" className="button visually-hidden">Edit</button>
        </section>
    )
}

export default Experience;