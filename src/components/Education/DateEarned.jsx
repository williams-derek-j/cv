function DateEarned(props) {
    if (props.editing) {
        return (
            <div id="" className="education-dateEarned component container">
                <label htmlFor="input-dateEarned" className="label">Date earned:</label>
                <input name="input-dateEarned" className="input-education-dateEarned input-dateEarned input" type="date" onChange={
                    (event) => { props.setValue(event.target.value) }
                }/>
            </div>
        )
    } else {
        return (
            <div id="" className="education-dateEarned component container">
                <label className="label">Date earned:</label>
                <span className="input-education-dateEarned input-dateEarned input"> {props.value}</span>
            </div>
        )
    }
}

export default DateEarned;