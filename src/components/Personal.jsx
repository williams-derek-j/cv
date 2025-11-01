import { useState, useEffect } from 'react'
import '../styles/Personal.css'
import ButtonSubmit from './ButtonSubmit.jsx'
import ButtonEdit from './ButtonEdit'
import Name from './Personal/Name'
import Email from './Personal/Email'
import Phone from './Personal/Phone'

function Personal() {
    const [editing, setEditing] = useState(true)

    const [valueName, setValueName] = useState("John Doe")
    const [valueEmail, setValueEmail] = useState("e.mail@email.com")
    const [valuePhone, setValuePhone] = useState("(206) 867-5309")

    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    return (
        <section id="" className="section-personal section">
            <h1 id="" className="header-personal header">About you:</h1>
            <form id="" className="form-personal form" onSubmit={(event) => event.preventDefault()}>
                <Name editing={editing} value={valueName} setValueName={setValueName} />
                <Email editing={editing} value={valueEmail} setValueEmail={setValueEmail} />
                <Phone editing={editing} value={valuePhone} setValuePhone={setValuePhone} />
                <ButtonSubmit editing={editing} setEditing={setEditing} />
                {/*<button id="" className="button-submit-personal button-submit button" onClick={() => handleSubmit()}>Submit</button>*/}
            </form>
            <ButtonEdit editing={editing} setEditing={setEditing} />
            {/*<button id="" className="button-edit-personal button-edit button visually-hidden">Edit</button>*/}
        </section>
    )
}

export default Personal;