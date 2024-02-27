import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SignUp = (props) => {

    const [login, setLogin] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObject = { login, email, password }
        axios.post("http://localhost:9999/api/create", tempObject)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="login aesthetic-modal-registration">
            <div className="aesthetic-modal-title">
                <div className="aesthetic-title-text">
                    aesthetic win95 css by torch2424
                </div>
            </div>
            <div className="aesthetic-modal-content">
                <form className="modal-form" onSubmit={handleSubmit} autocomplete="off">
                    <label htmlFor="">Create Login</label>
                    <br />
                    <br />
                    <input className="modal-form" type="text" onChange={(e) => setLogin(e.target.value)} />
                    <br />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <br />
                    <input className="modal-form" type="text" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <br />
                    <input className="modal-form" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button style={{ marginLeft: 54 }}>Submit</button>
                    <Link style={{ fontSize: 15, marginLeft: 25 }} to={"/"}>back</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp