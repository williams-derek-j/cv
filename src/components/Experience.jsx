import "../styles/Experience.css"
import "../styles/Experience/PreviousJob.css"
import PreviousJob from "./Experience/PreviousJob.jsx"
import {useEffect, useState} from "react";
import ButtonEdit from "./ButtonEdit.jsx";
import ButtonSubmit from "./ButtonSubmit.jsx";

function Experience() {
    const [editing, setEditing] = useState(true)
    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    return (
        <section id="" className="section-experience section">
            <h1 id="" className="header-experience header">Experience:</h1>
            <form id="" className="form-experience form" onSubmit={(event) => event.preventDefault()}>
                <div id="" className="workHistory container">
                    <PreviousJob editing={editing}/>
                    <PreviousJob editing={editing}/>
                </div>
                <ButtonSubmit editing={editing} setEditing={setEditing} />
                {/*<button id="" className="button-submit button" onClick={() => handleSubmit()}>Submit</button>*/}
            </form>
            <ButtonEdit editing={editing} setEditing={setEditing} />
            {/*<button id="" className="button-edit button visually-hidden">Edit</button>*/}
        </section>
    )
}

export default Experience;