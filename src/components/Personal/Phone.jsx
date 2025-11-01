function Phone(props) {
    if (props.editing) {
        return (
            <div id="" className="personal-phone component container">
                <label className="label-personal-phone label-phone label">
                    Phone #:
                    <input name="input-phone" className="input-personal-phone input-phone input" type="text" placeholder={props.value} onInput={
                        (event) => { props.setValuePhone(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="personal-phone component container">
                <label className="label-personal-phone label-phone label">
                    Phone #:
                    <span className="span-personal-phone span-phone span"> {props.value}"</span>
                </label>
            </div>
        )
    }
}

export default Phone;