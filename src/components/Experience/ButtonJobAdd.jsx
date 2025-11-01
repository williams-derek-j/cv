function ButtonJobAdd(props) {
    if (props.editing) {
        return (
            <button id="" className="button-jobAdd button" onClick={() => {
                props.setJobCount(props.getJobCount + 1)
            }}>Add Job</button>
        )
    }
}

export default ButtonJobAdd;