import React, {useContext} from 'react'
import GifsContext from '../../context/GifsContext'

export default function Detail ({ params }) {
    const {gifs} = useContext(GifsContext)
    console.log(gifs)

    // console.log(params.id)
    return <h1>GIF con id {params.id}</h1>
}