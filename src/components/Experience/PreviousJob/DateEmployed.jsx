import {useState} from "react";

function DateEmployed(props) {

    const [valueDateBegan, setValueDateBegan] = useState("01/01/2001")
    const [valueDateEnded, setValueDateEnded] = useState("01/01/2004")

    if (props.editing) {
        return (
            <div id="" className="dateEmployed component container">
                <div className="dateEmployed-dateBegan container">
                    <label htmlFor="input-dateBegan" className="label">
                        {"Date employment began: "}
                        <input name="input-dateBegan" className="input-dateEmployed-dateBegan input" type="date" onChange={
                            (event) => setValueDateBegan(event.target.value)
                        }/>
                    </label>
                </div>
                <div className="dateEmployed-dateEnded container">
                    <label htmlFor="input-dateEnded" className="label">
                        {"Date employment ended: "}
                        <input name="input-dateEnded" className="input-dateEmployed-dateEnded input" type="date" onChange={
                            (event) => setValueDateEnded(event.target.value)
                        }/>
                    </label>
                </div>
            </div>
        )
    } else {
        return (
            <div id="" className="dateEmployed component container">
                <div className="dateEmployed-dateBegan container">
                    <label className="label-dateEmployed-dateBegan label-dateEmployed label">
                        {"Date employment began: "}
                        <span className="input-dateEmployed-dateBegan input">{valueDateBegan}</span>
                    </label>
                </div>
                <div className="dateEmployed-dateEnded container">
                    <label className="label-dateEmployed-dateEnded label-dateEmployed label">
                        {"Date employment ended: "}
                        <span className="input-dateEmployed-dateBegan input">{valueDateEnded}</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default DateEmployed;