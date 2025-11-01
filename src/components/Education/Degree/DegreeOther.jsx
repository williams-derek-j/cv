function DegreeOther(props) {
    if (props.selected) {
        return (
            <label htmlFor="input-degree" className='label-degree label'> {/*for manually inputting other degrees*/}
                {"Degree: "}
                <input name="input-degree" className="input-degree input" type="text" placeholder={props.value}/>
            </label>
        )
    } else {
        return null
    }
}

export default DegreeOther;