import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuth() {
    const {isAuth, auth, unAuth} = useContext(AuthContext);

    return {isAuth, auth, unAuth}
}