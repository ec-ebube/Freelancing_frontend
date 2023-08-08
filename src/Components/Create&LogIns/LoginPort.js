import React from 'react'
import useLogin from '../../Hooks/useLogin';
import Loading from '../../Neccessary/Loading';
import { useState } from 'react';
import { LoginPortURL } from '../../EndPoints';
import { useNavigate } from 'react-router-dom';

function LoginPort() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const { loginPort, error, data, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formdata = new FormData()
            formdata.append('Email', Email)
            formdata.append('Password', Password)

            await loginPort(LoginPortURL, formdata)
            navigate('/');
            console.log(data);
        } catch (error) {
            
        }
    }
    return (
        <div>
            {isLoading && <div className='contLoad'><Loading /></div>}
            {error && <div>{Error}</div>}
            {!isLoading &&
                <div className="Createportfolio">
                    <div className="cont">
                        <h2 className="qtittle">Welcome Back</h2>
                        <div className="DeBox">
                            <form onSubmit={handleSubmit}>
                                <div className="questiondiv">
                                    <label htmlFor="Email" className="question">Email</label>
                                    <input
                                        type="email"
                                        className="input"
                                        required
                                        name="Email"
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="questiondiv">
                                    <label htmlFor="Password" className="question">Password</label>
                                    <input
                                        type="password"
                                        className="input"
                                        required
                                        name="Password"
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="questiondiv">
                                    <button
                                        type="submit"
                                        className="submit"
                                        disabled={isLoading}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default LoginPort
