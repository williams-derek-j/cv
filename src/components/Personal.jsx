import '../styles/Personal.css'
import Name from './Personal/Name.jsx'
import Email from './Personal/Email.jsx'
import Phone from './Personal/Phone.jsx'

function Personal() {
    return (
        <section id="" className="section-personal section">
            <h1 id="header-personal>" className="header">About you:</h1>
            <form id="form-personal" className="form">
                <Name />
                <Email />
                <Phone />
                <button id="button-submit" className="button">Submit</button>
            </form>
            <button id="button-edit" className="button visually-hidden">Edit</button>
        </section>
    )
}

export default Personal;