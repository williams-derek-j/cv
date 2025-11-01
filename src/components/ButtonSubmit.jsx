function ButtonSubmit(props) {
    if (props.editing) {
        return (
            <button id="" className="button-submit button" onClick={() => props.setEditing(false)}>Submit</button>
        )
    } else {
        return (
            <button id="" className="button-submit button visually-hidden">Submit</button>
        )
    }
}

export default ButtonSubmit;