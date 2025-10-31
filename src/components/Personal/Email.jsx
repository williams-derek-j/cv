function Email(props) {
    console.log(props)
    if (props.editing) {
        return (
            <div id="" className="personal-email component container">
                <label className="label">
                    Email:
                    <input name="input-email" className="input-personal-email input-email input" type="email" placeholder="e.mail@email.com" />
                </label>
            </div>
        )
    } else {
        console.log('hi')
        return (
            <div id="" className="personal-email component container">
                <label className="label-personal-email label-email label">
                    Email:
                    <span className="span-personal-email span-email input" content="e.mail@email.com" />
                </label>
            </div>
        )
    }
}

export default Email;