import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    const {item, color} = useParams();
    return (
        <div>
            {
            isNaN(item) ? <h1 style={{backgroundColor: color}}>The word is: {item}</h1> : <h1 style={{backgroundColor: color}}>The number is: {item}</h1>
            }
        </div>
    )
}

export default Word