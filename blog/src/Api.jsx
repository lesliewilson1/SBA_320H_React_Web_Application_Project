import { useState, useEffect } from 'react'

export default function Api({ question }) {

const [advice, setAdvice] = useState("")
const URL = 'https://api.adviceslip.com/advice'

//---------------------------------------End---------------------------------------------------------//

//-------------------------------Start of Functions------------------------------------------------//

useEffect(() => {
    if(!question) return;

    const fetchData = async () => {
        try{
            
                const result = await fetch(URL);
                const data = await result.json();
                setAdvice(data.slip.advice);
                
    } catch(error) {
        setAdvice("Oops! Fetch advice not available.");
        console.error("Failed to catch Advice", error);
    }
        
    }
    fetchData();
}, [question]);



return (
    <>
        {advice && <h3 className="api">{advice} </h3>}
    </>
);

}