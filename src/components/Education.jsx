import '../styles/Education.css'
import College from './Education/College';
import Degree from './Education/Degree';
import DateEarned from './Education/DateEarned';
import {useEffect, useState} from "react";

function Education() {
    const [editing, setEditing] = useState(true)
    function handleSubmit() {
        console.log('handlesubmit ran')

        setEditing(false)
    }

    const [valueCollege, setValueCollege] = useState(" University of Washington")
    const [valueDegree, setValueDegree] = useState(" Other")
    const [valueDateEarned, setValueDateEarned] = useState(" 01/01/1994")

    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    return (
        <section id="" className="section-education section">
            <h1 id="header-education" className="header">Education:</h1>
            <form id="form-education" className="form" onSubmit={(event) => {event.preventDefault()}}>
                <College editing={editing} value={valueCollege} setValue={setValueCollege}/>
                <Degree editing={editing} value={valueDegree} setValue={setValueDegree}/>
                <DateEarned editing={editing} value={valueDateEarned} setValue={setValueDateEarned}/>
                <button id="button-submit" className="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
            <button id="button-edit" className="button visually-hidden">Edit</button>
        </section>
    )
}

export default Education;