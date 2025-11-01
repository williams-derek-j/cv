import { useEffect, useState } from "react";
import "../styles/Experience.css"
import "../styles/Experience/PreviousJob.css"
import PreviousJob from "./Experience/PreviousJob.jsx"
import ButtonSubmit from "./ButtonSubmit.jsx";
import ButtonEdit from "./ButtonEdit.jsx";
import ButtonJobAdd from "./Experience/ButtonJobAdd.jsx"

function Experience() {
    const [editing, setEditing] = useState(true)
    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    const [jobCount, setJobCount] = useState(2);

    function deleteJob(index) {
        jobs.splice(index, 1)
    }

    const jobs = []
    for (let i = 0; i < jobCount; i++) {
        jobs.push(<PreviousJob key={i} editing={editing} deleteJob={deleteJob} setJobCount={setJobCount} getJobCount={jobCount} />)
    }

    return (
        <section id="" className="section-experience section">
            <h1 id="" className="header-experience header">Experience:</h1>
            <form id="" className="form-experience form" onSubmit={(event) => event.preventDefault()}>
                <div id="" className="workHistory container">
                    {jobs}
                </div>
                <ButtonSubmit editing={editing} setEditing={setEditing} />
                <ButtonJobAdd editing={editing} setJobCount={setJobCount} getJobCount={jobCount} />
            </form>
            <ButtonEdit editing={editing} setEditing={setEditing} />
        </section>
    )
}

export default Experience;