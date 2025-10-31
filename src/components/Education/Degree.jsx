function Degree() {
    return (
        <div id="" className="education-degree component container">
            <select name="degree-type" id="select-degree-type" className="select">
                <option value="Bachelor's of Science">Bachelor's of Science</option>
                <option value="Bachelor's of Arts">Bachelor's of Arts</option>
                <option value="Associates's of Science">Associate's of Science</option>
                <option value="Associates's of Arts">Associate's of Arts</option>
                <option value="Master's of Science">Master's of Science</option>
                <option value="Master's of Arts">Master's of Arts</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="input-degree" className='label visually-hidden'>Degree:</label>
            <input name="input-degree" className="input-degree input visually-hidden" type="text"/>
        </div>
    )
}

export default Degree;