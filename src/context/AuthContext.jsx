import {createContext, useContext, useState, useEffect} from 'react'

const AuthContext = createContext()

export function AuthProvider({children}){
    const[auth,setAuth] = useState(() => {
        const saved = localStorage.getItem('auth')
        return saved ? JSON.parse(saved) : null
        })

    useEffect(() => {
        if(auth){
            localStorage.setItem('auth',JSON.stringify(auth))
            }else{
                localStorage.removeItem('auth')
                }
        },[auth])

    function login(data){
        setAuth(data)
        }

    function logout(){
        setAuth(null)
        }
    return(
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
            </AuthContext.Provider>
        )
    }
export function useAuth(){
    return useContext(AuthContext)
    }