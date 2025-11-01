function ButtonJobAdd(props) {
    if (props.editing) {
        return (
            <button id="" className="button-jobAdd button" onClick={() => {
                props.setValue(props.getValue + 1)
            }}>Add Job</button>
        )
    }
}

export default ButtonJobAdd;