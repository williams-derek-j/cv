function Email(props) {
    if (props.editing) {
        return (
            <div id="" className="personal-email component container">
                <label className="label">
                    Email:
                    <input name="input-email" className="input-personal-email input-email input" type="email" placeholder={props.value} onInput={
                        (event) => { props.setValueEmail(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="personal-email component container">
                <label className="label-personal-email label-email label">
                    Email:
                    <span className="span-personal-email span-email input"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default Email;