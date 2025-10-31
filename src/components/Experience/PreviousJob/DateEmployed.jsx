function DateEmployed() {
    return (
        <div id="" className="experience-previousJob-dateEmployed component container">
            <div className="dateEmployed-dateBegan container">
                <label htmlFor="input-dateBegan" className="label">Date employment began:</label>
                <input name="input-dateBegan" className="input-experience-previousJob-dateEmployed-dateBegan input" type="date" />
            </div>
            <div className="dateEmployed-dateEnded container">
                <label htmlFor="input-dateEnded" className="label">Date employment ended:</label>
                <input name="input-dateEnded" className="input-experience-previousJob-dateEmployed-dateEnded input" type="date" />
            </div>
        </div>
    )
}

export default DateEmployed;