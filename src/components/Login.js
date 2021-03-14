import React, { useState } from 'react'
import '../css/login.css'


function Login({history}) {

 const [username, setUsername] = useState('')
 const [password, setPassword] = useState("");
    return (
					<div>
						<form className='login' onSubmit={(e)=>{e.preventDefault()
                        history.push(`/movies/${username}`)}}>
                            <h2>Login</h2>
							<label>
								Username
								<br />
								<input onChange={e => setUsername(e.target.value)} value={username} className="inputBox" type="text"></input>
							</label>
							<label>
								Password
								<br />
								<input onChange={e => setPassword(e.target.value)} value={password} className="inputBox" type="text"></input>
							</label>
							<input className='inputSubmit' type="submit"></input>
						</form>
					</div>
				);
}

export default Login
