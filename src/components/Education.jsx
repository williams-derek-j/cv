import { useEffect, useState } from "react";
import '../styles/Education.css'
import College from './Education/College';
import Degree from './Education/Degree';
import DateEarned from './Education/DateEarned';
import ButtonSubmit from "./ButtonSubmit.jsx";
import ButtonEdit from "./ButtonEdit.jsx";

function Education() {
    const [editing, setEditing] = useState(true)

    const [valueCollege, setValueCollege] = useState("University of Washington")
    const [valueDegree, setValueDegree] = useState("Bachelor's of Science")
    const [valueDateEarned, setValueDateEarned] = useState("01/01/1994")

    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    return (
        <section id="" className="section-education section">
            <h1 id="header-education" className="header">Education:</h1>
            <form id="form-education" className="form" onSubmit={(event) => event.preventDefault()}>
                <College editing={editing} value={valueCollege} setValue={setValueCollege}/>
                <Degree editing={editing} value={valueDegree} setValue={setValueDegree}/>
                <DateEarned editing={editing} value={valueDateEarned} setValue={setValueDateEarned}/>
                <ButtonSubmit editing={editing} setEditing={setEditing} />
            </form>
            <ButtonEdit editing={editing} setEditing={setEditing} />
        </section>
    )
}

export default Education;