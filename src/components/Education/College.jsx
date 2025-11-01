function College(props) {
    if (props.editing) {
        return (
            <div id="" className="education-college component container">
                <label htmlFor="input-college" className="label-education-college label-college label">College/University:</label>
                <input name="input-college" className="input-education-college input-college input" type="text" placeholder={props.value} onChange={
                    (event) => { props.setValue(event.target.value) }
                }/>
            </div>
        )
    } else {
        return (
            <div id="" className="education-college component container">
                <label className="label-education-college label-college label">College/University:</label>
                <span className="input-education-college input-college input"> {props.value}</span>
            </div>
        )
    }
}

export default College;