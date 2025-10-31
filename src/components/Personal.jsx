import { useState, useEffect } from 'react'
import '../styles/Personal.css'
import Name from './Personal/Name'
import Email from './Personal/Email'
import Phone from './Personal/Phone'

function Personal() {
    // const modules = import.meta.glob("./Personal/*.jsx", { eager: true })

    // const [components, setComponents] = useState([])

    // const temp = {}
    // for (let i = 0; i < Object.keys(modules).length; i++) {
    //     temp[crypto.randomUUID()] = Object.values(modules)[i].default
    // }

    const [editing, setEditing] = useState(true)
    function handleSubmit() {
        console.log('handlesubmit ran')

        setEditing(false)
    }

    useEffect(() => {
        console.log('useeffect ran')
    }, [editing])

    return (
        <section id="" className="section-personal section">
            <h1 id="" className="header-personal header">About you:</h1>
            <form id="" className="form-personal form" onSubmit={(event) => {event.preventDefault()}}>
                {/*{Object.entries(components).map(([key, Component]) => {*/}
                {/*    return <Component key={key} editing/>*/}
                {/*})}*/}
                <Name editing={editing}/>
                <Email editing={editing}/>
                <Phone editing={editing}/>
                <button id="" className="button-submit-personal button-submit button" onClick={() => handleSubmit()}>Submit</button>
            </form>
            <button id="" className="button-edit-personal button-edit button visually-hidden">Edit</button>
        </section>
    )
}

export default Personal;