function Degree() {
    return (
        <div className="degree">
            <select name="degree-type" id="select-degree-type">
                <option value="Bachelor's of Science">Bachelor's of Science</option>
                <option value="Bachelor's of Arts">Bachelor's of Arts</option>
                <option value="Associates's of Science">Associate's of Science</option>
                <option value="Associates's of Arts">Associate's of Arts</option>
                <option value="Masters's of Science">Masters's of Science</option>
                <option value="Masters's of Arts">Masters's of Arts</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="input-degree" className='visually-hidden'>Degree:</label>
            <input id="input-degree" className="input input-degree visually-hidden" type="text"/>
        </div>
    )
}

export default Degree;