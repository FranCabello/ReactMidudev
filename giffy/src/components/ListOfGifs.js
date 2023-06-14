import React, {useEffect, useState} from "react"
import Gif from "./Gif"
import getGifts from "../services/getGifs"

export default function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        getGifts({ keyword })
        .then((gifs) => setGifs(gifs))
    }, [keyword])

    return gifs.map(({ id, title, url }) =>
        <Gif 
            id={id} 
            key={id} 
            title={title} 
            url={url} 
        />
    )
}