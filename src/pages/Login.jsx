function Login(){
    const[username, setUsername]  = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState('')
    const{login} = useAuth()
    const navigate = useNavigate()

        async function handleSubmit(e){
            e.preventDefault()
            try{
                const res = await axios.post('http://localhost:8080/api/auth/login',{username,password})
                login(res.data)
                navigate('/shop')
                }catch{
                    setError('Invalid username or password')
                    }

                return(


                    )
            }



        }