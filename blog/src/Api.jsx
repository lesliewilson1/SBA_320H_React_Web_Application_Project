import { useState, useEffect } from 'react'

export default function Api() {

const URL = 'https://api.adviceslip.com/advice'

useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(URL)
        const data = await result.json()
        console.log('Advice:', data.slip.advice)
        
    }
    fetchData()
}, []) 

    return (
        <>
        </>
    )
}