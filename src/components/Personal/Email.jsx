function Email(props) {
    if (props.editing) {
        return (
            <div id="" className="email component container">
                <label className="label">
                    {"Email: "}
                    <input name="input-email" className="input-email input" type="email" placeholder={props.value} onChange={
                        (event) => { props.setValueEmail(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="email component container">
                <label className="label-email label">
                    {"Email: "}
                    <span className="span-email input"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default Email;