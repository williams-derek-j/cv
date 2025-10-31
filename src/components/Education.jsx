import '../styles/Education.css'
import College from './Education/College';
import Degree from './Education/Degree';
import DateEarned from './Education/DateEarned';

function Education() {
    return (
        <section id="" className="section-education section">
            <h1 id="header-education" className="header">Education:</h1>
            <form id="form-education" className="form">
                <College />
                <Degree />
                <DateEarned />
                <button id="button-submit" className="button">Submit</button>
            </form>
            <button id="button-edit" className="button visually-hidden">Edit</button>
        </section>
    )
}

export default Education;