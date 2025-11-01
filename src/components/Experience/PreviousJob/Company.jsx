function Company(props) {
    if (props.editing) {
        return (
            <div id="" className="company component container">
                <label htmlFor="input-company" className="label-company label">
                    {"Company: "}
                    <input name="input-company" className="input-company input" type="text" placeholder={props.value} onChange={
                        (event) => { props.setValue(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="company component container">
                <label className="label-company label">
                    {"Company: "}
                    <span className="input-company input">{props.value}</span>
                </label>
            </div>
        )
    }
}

export default Company;