function ButtonSubmit(props) {
    if (props.editing) {
        return (
            <button id="" className="button-submit button" onClick={() => props.setEditing(false)}>Submit</button>
        )
    } else {
        return null
    }
}

export default ButtonSubmit;