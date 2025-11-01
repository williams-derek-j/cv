function ButtonJobDelete(props) {
    return (
        <button id="" className="button-jobDelete button" onClick={() => {
            props.setJobCount(props.getJobCount - 1)
            props.deleteJob(props.index)
        }}>Delete Job</button>
    )
}

export default ButtonJobDelete;