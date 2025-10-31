import '../styles/Education.css'
import College from './Education/College';
import Degree from './Education/Degree';
import DateEarned from './Education/DateEarned';

function Education() {
    return (
        <section className="section-education">
            <h1 className="header-education">Education:</h1>
            <College />
            <Degree />
            <DateEarned />
        </section>
    )
}

export default Education;