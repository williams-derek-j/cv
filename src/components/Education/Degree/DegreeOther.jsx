function DegreeOther(props) {
    if (props.selected && props.editing) {
        return (
            <label htmlFor="input-degree" className='label-degree label'> {/*for manually inputting other degrees*/}
                {"Degree: "}
                <input name="input-degree" className="input-degree input" type="text" placeholder={props.value} onChange={
                    (event) => { props.setValue(event.target.value) }
                }/>
            </label>
        )
    } else {
        return null
    }
}

export default DegreeOther;