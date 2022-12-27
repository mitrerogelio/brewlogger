import { useState } from "react"
import firebaseConfig from "../firebase/firebase-config"

const LogForm = () => {
    // Info

    // Write Log to DB
    const [newLog, setNewLog] = useState("")

    const createLog = async () => {

    }

    return (
        <button className="btn btn-primary" onChange={createLog}>Button</button>

    )
}

export default LogForm