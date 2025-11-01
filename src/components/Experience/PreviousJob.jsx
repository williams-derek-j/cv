// import ".../styles/Experience/PreviousJob.css" this doesn't work? causes error, don't know why
import { useState } from "react";
import ButtonJobDelete from "./PreviousJob/ButtonJobDelete.jsx"
import Company from './PreviousJob/Company.jsx'
import Title from './PreviousJob/Title.jsx'
import JobDescription from './PreviousJob/JobDescription.jsx'
import DateEmployed from './PreviousJob/DateEmployed.jsx'

function PreviousJob(props) {

    const [valueCompany, setValueCompany] = useState("Initech")
    const [valueJobTitle, setValueJobTitle] = useState("Senior Customer Relations Liason")
    const [valueJobDescription, setValueJobDescription] = useState("Well--well look. I already told you: I deal with the god damn customers so the engineers don't have to. I have people skills; I am good at dealing with people. Can't you understand that? What the hell is wrong with you people?")

    return (
        <div className="previousJob component container">
            <ButtonJobDelete index={props.key} deleteJob={props.deleteJob} setJobCount={props.setJobCount} getJobCount={props.getJobCount} />
            <Company editing={props.editing} value={valueCompany} setValue={setValueCompany} />
            <Title editing={props.editing} value={valueJobTitle} setValue={setValueJobTitle} />
            <JobDescription editing={props.editing} value={valueJobDescription} setValue={setValueJobDescription}/>
            <DateEmployed editing={props.editing}/>
        </div>
    )
}

export default PreviousJob;