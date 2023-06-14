import {useContext, useEffect, useState} from "react"
import getGifs from "../services/getGifs"
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useContext(GifsContext)

    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    useEffect(function() {
        setLoading(true)
        
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardamos la keyword en el localStorage
            if (keyword) localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    return {loading, gifs}
}