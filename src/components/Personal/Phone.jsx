function Phone() {
    return (
        <div id="phone" className="component">
            <label htmlFor="input-phone" className="label">Phone #:</label>
            <input id="input-phone" className="input" type="text" placeholder="(206) 867-5309"/>
        </div>
    )
}

export default Phone;