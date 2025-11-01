function DateEarned(props) {
    if (props.editing) {
        return (
            <div id="" className="dateEarned component container">
                <label htmlFor="input-dateEarned" className="label">
                    {"Date earned: "}
                    <input name="input-dateEarned" className="input-dateEarned input" type="date" onChange={
                        (event) => { props.setValue(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="dateEarned component container">
                <label className="label-dateEarned label">
                    {"Date earned: "}
                    <span className="input-dateEarned input"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default DateEarned;