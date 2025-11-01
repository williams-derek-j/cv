function Degree(props) {
    if (props.editing) {
        return (
            <div id="" className="education-degree component container">
                <label htmlFor="input-select-degree" className="label-education-degree label-education label">
                    {"Degree: "}
                    <select name="degree-type" id="select-degree-type" className="select" onChange={
                        (event) => { props.setValue(event.target.value) }
                    }>
                        <option value="Bachelor's of Science">Bachelor's of Science</option>
                        <option value="Bachelor's of Arts">Bachelor's of Arts</option>
                        <option value="Associates's of Science">Associate's of Science</option>
                        <option value="Associates's of Arts">Associate's of Arts</option>
                        <option value="Master's of Science">Master's of Science</option>
                        <option value="Master's of Arts">Master's of Arts</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label htmlFor="input-degree" className='label-education-degree label-education label visually-hidden'> {/*for manually inputting other degrees*/}
                    Degree:
                    <input name="input-degree" className="input-education-degree input-degree input visually-hidden" type="text" placeholder={props.value}/>
                </label>
            </div>
        )
    } else {
        return (
            <div id="" className="education-college component container">
                <label className='label-education-degree label-education label'> {/*for manually inputting other degrees*/}
                    Degree:
                    <span className="span-education-degree span-degree span"> {props.value}</span>
                </label>
            </div>
        )
    }
}

export default Degree;