function Title(props) {
    if (props.editing) {
        return (
            <div id="" className="title component container">
                <label htmlFor="input-title" className="label">
                    {"Job Title: "}
                    <input name="input-title" className="input-title input" type="text" placeholder={props.value} onChange={
                        (event) => { props.setValue(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="title component container">
                <label className="label">
                    {"Job Title: "}
                    <span className="input-title input">{props.value}</span>
                </label>
            </div>
        )
    }
}

export default Title;