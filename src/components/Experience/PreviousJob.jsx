// import ".../styles/Experience/PreviousJob.css" this doesn't work? causes error, don't know why
import Company from './PreviousJob/Company.jsx'
import Title from './PreviousJob/Title.jsx'
import JobDescription from './PreviousJob/JobDescription.jsx'
import DateEmployed from './PreviousJob/DateEmployed.jsx'

function PreviousJob() {
    return (
        <div className="experience-previousJob component container">
            <Company />
            <Title />
            <JobDescription />
            <DateEmployed />
        </div>
    )
}

export default PreviousJob;