import { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import useVideosContext from "../hook/useVideosContext";

export const UserContext = createContext({} as any)
export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [userName, setUserName] = useState('')
    const [user_id, setUser_id] = useState('')
    
    const navigate = useNavigate()
    
    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
            setUser(data.user)
            setLogin(true)
            setUserName(data.user.nome)
            setUser_id(data.user.id)
        }).catch(() => {
            console.log('Usuário não autenticado')
        })
    }


    useEffect(() => {
        getUser(token);
    }, [token])

    const Logout = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token)
            setToken(data.token)
            getUser(data.token)
            navigate('/')
        }).catch((error) => {
            console.log({error: 'Não foi possivel fazer o login'})
        })
    }

    const SignUp = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(({ data }) => {
            alert('Usuario cadastrado com sucesso!')
            handleLogin(email, password)
            navigate('/')
        }).catch((error) => {
            console.log({error: 'Não foi possivel fazer o login'})
        })
    }



    return(
        <UserContext.Provider value={{
            login,
            setLogin,
            user,
            handleLogin,
            Logout: Logout,
            SignUp,
            user_id,
            token,
            userName,
            getUser
        }}>
            {children}
        </UserContext.Provider>
    )
}