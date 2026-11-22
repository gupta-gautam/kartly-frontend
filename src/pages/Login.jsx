import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../api';
import {useAuth} from '../context/AuthContext'

function Login(){
    const[username, setUsername]  = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState('')
    const{login} = useAuth()
    const navigate = useNavigate()

        async function handleSubmit(e){
            e.preventDefault()
            try{
                const res = await api.post('/api/auth/login',{username,password})
                login(res.data)
                navigate('/shop')
                }catch{
                    setError('Invalid username or password')
                    }
}
                return(
               <div className ="p-8 max-w-sm">
               <h1 className="text-3xl font-bold mb-4">Login</h1>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Username" value={username}
                          onChange = {e => setUsername(e.target.value)}
                          className ="border rounded px-3 py-1 mb-1 w-full"/>
                   <input type="password" placeholder="Password" value={password}
                          onChange = {e => setPassword(e.target.value)}
                          className = "border rounded px-3 py-1 mb-2 w-full"/>
                   <button type ="submit" className="border rounded px-3 py-1">Login</button>
               </form>
               {error && <p className="text-red-500 mt-2">{error}</p>}
               </div>
                    )
        }
    export default Login