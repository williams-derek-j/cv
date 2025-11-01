function Name(props) {
    if (props.editing) {
        return (
            <div id="" className="name component container">
                <label className="label-name label">
                    {"Name: "}
                    <input name='input-name' className="input-name input" type='text' placeholder={props.value} onInput={
                        (event) => { props.setValueName(event.target.value) }
                    }/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="name component container">
                <label className="label-name label">
                    {"Name: "}
                    <span className="span-name span"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default Name