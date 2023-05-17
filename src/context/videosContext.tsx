import { createContext, useState } from 'react'
import api from '../api'

export const VideosContext = createContext({} as any)

export const VideosStorage = ({children}: any) => {
    const [userVideos, setUserVideos] = useState([])
    const [searchValue, setSearchValue] = useState('')
    

    const CreateVideo = (user_id: string, title: string, description: string, banner: string, publishedAt: Date, token: string, userName: string) => {
        api.post('/videos/create-video', {user_id, title, description, banner, publishedAt, userName}, {headers: {Authorization: token}} ).then(({data}) => {
            console.log(data)
        }).catch((error) => {
            console.log({error: 'Não foi possivel fazer o login'})
        })
    }

    const GetVideos = (user_id: string, token: string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`, {headers:{Authorization: token}}).then(({data}) => {
            setUserVideos(data.videos)
            console.log(data.videos)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <VideosContext.Provider value={{CreateVideo, GetVideos, userVideos, setSearchValue, searchValue}}>
            {children}
        </VideosContext.Provider>
    )
}
