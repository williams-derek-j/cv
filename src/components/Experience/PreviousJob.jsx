import Company from './PreviousJob/Company.jsx'
import Title from './PreviousJob/Title.jsx'
import JobDescription from './PreviousJob/JobDescription.jsx'
import DateEmployed from './PreviousJob/DateEmployed.jsx'

function PreviousJob() {
    return (
        <div className="previousJob component">
            <Company />
            <Title />
            <JobDescription />
            <DateEmployed />
        </div>
    )
}

export default PreviousJob;