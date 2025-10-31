function Email() {
    return(
        <div id="email" className="component">
            <label htmlFor="input-email" className="label">Email:</label>
            <input id="input-email" className="input" type="email" placeholder="e.mail@email.com" />
        </div>
    )
}

export default Email;