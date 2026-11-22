import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import api from '../api';

function Register(){
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
     const[error, setError] = useState('')

        const navigate = useNavigate()

        async function handleSubmit(e){
            e.preventDefault()
            try{
                 await api.post('/api/auth/register',{username,email,password})
                navigate('/login')
                }catch{
                    setError('Registration failed. Try another username.')
                    }
            }
        return(
        <div className ="p-8 max-w-sm">
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <form onSubmit ={handleSubmit}>
                <input type="text" placeholder="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)}
                        className ="border rounded px-3 py-1 mb-3 w-full"/>
                 <input type="password" placeholder="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className ="border rounded px-3 py-1 mb-3 w-full"/>
                   <input type="email" placeholder="Email" value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className ="border rounded px-3 py-1 mb-3 w-full"/>
                   <button type ="submit" className="border rounded px-3 py-1">Register</button>
            </form>
             {error && <p className="text-red-500 mt-2">{error}</p>}
                           </div>
            )
    }
 export default Register