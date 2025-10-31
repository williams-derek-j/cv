import '../styles/Personal.css'

function Personal() {
    const modules = import.meta.glob("./Personal/*.jsx", { eager: true })

    const components = {}
    for (let i = 0; i < Object.keys(modules).length; i++) {
        components[i] = Object.values(modules)[i].default
    }

    return (
        <section id="" className="section-personal section">
            <h1 id=">" className="header-personal header">About you:</h1>
            <form id="" className="form-personal form">
                {Object.entries(components).map(([key, Component]) => {
                    return <Component key={key}/>
                })}
                <button id="button-submit" className="button">Submit</button>
            </form>
            <button id="button-edit" className="button visually-hidden">Edit</button>
        </section>
    )
}

export default Personal;