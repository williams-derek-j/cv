function JobDescription(props) {
    if (props.editing) {
        return (
            <div id="" className="jobDescription component container">
                <label htmlFor="input-jobDescription" className="label">
                    {"Responsibilities: "}
                    <input name="input-jobDescription" className="input-jobDescription input" type="text" placeholder={props.value} onChange={
                        (event) => { props.setValue(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="jobDescription component container">
                <label className="label">
                    {"Responsibilities: "}
                    <span className="input-jobDescription input">{props.value}</span>
                </label>
            </div>
        )
    }
}

export default JobDescription;