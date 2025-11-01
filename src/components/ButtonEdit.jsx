function ButtonEdit(props) {
    if (!props.editing) {
        return (
            <button id="" className="button-edit-personal button-edit button" onClick={() => props.setEditing(true)}>Edit</button>
        )
    } else {
        return null
    }
}

export default ButtonEdit;