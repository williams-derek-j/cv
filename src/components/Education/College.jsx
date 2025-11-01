function College(props) {
    if (props.editing) {
        return (
            <div id="" className="college component container">
                <label htmlFor="input-college" className="label-college label">
                    {"College/University: "}
                    <input name="input-college" className="input-college input" type="text" placeholder={props.value} onChange={
                        (event) => { props.setValue(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="college component container">
                <label className="label-college label">
                    {"College/University: "}
                    <span className="input-college input"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default College;