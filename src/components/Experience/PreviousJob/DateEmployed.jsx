function DateEmployed() {
    return (
        <div id="dateEmployed" className="component">
            <div id="dateBegan" className="component">
                <label htmlFor="input-dateBegan" className="label">Date employment began:</label>
                <input id="input-dateBegan" className="input" type="date" />
            </div>
            <div id="dateEnded" className="component">
                <label htmlFor="input-dateEnded" className="label">Date employment ended:</label>
                <input id="input-dateEnded" className="input" type="date" />
            </div>
        </div>
    )
}

export default DateEmployed;