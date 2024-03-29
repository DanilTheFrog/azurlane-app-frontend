import { useEffect, useState } from "react"
import { ICharacter } from "../models"
import {serverURL} from '../config'
import API from "../shared/api/api"



export const useCharacters = () => {

    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [status, setStatus] = useState('loading')
    const [error, setError] = useState<string>('')

    async function fetchCharacters() {
        try {
            setStatus('loading')
            // const response = await axios.get<ICharacter[]>(serverURL+"characters/", {
            //     headers: {
            //         'Authorization': API.getAuth()
            //     }
            // })
            
            setCharacters([]);
            setStatus('loaded')
        } catch (e: unknown) {
            const error = e
            
            setStatus('error')
            setError('error')
        }
    }

    useEffect(()=>{
        fetchCharacters()
    }, [])


    return {status, setStatus, characters, setCharacters, error}
}