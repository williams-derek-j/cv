function ButtonEdit(props) {
    if (!props.editing) {
        return (
            <button id="" className="button-edit-personal button-edit button" onClick={() => props.setEditing(true)}>Edit</button>
        )
    } else {
        return (
            <button id="" className="button-edit-personal button-edit button visually-hidden">Edit</button>
        )
    }
}

export default ButtonEdit;