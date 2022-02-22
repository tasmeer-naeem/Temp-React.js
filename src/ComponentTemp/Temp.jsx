import { Card,  Input } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Temp = () => {
    const [search, setsearch] = useState("Karachi")
    const [city, setcity] = useState(null)

    useEffect(() => {
       const fetchApi=async()=>{
           //const url="api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7aadca0b60a7128ad602ca70f28a8697`
           const res = await fetch(url)
           //console.log(res)
           const resjson = await res.json()
           //console.log(resjson)
           setcity(resjson.main)
       }
        fetchApi()
    },[search])

    return (
        <div>
        <div  style={{textAlign:"center" , margin:"3%"}} ><h1>WEATHER APP</h1></div> 
        <div>
            <Card  style={{textAlign:"center" , maxWidth:"450px" , height:"400px", marginTop:"4%" , marginLeft:"35%" ,paddingTop:"2%" , backgroundColor:"lightblue" }} >
                <Input type="search" value={search} placeholder="search city" onChange={(event)=>{ setsearch(event.target.value) }} />
        
        {!city ? (<h3>No Data Found</h3>) :
            (
                <div style={{marginTop:"20%", marginBottom:"15%" , animation:"drift 300ms infinite linear" , transform:"0.6s"}}>
                <h1>{search}</h1>
                <h1>{city.temp} Cel</h1>
                <h4>Min : {city.temp_min} Cel | Max : {city.temp_max} Cel </h4>
                </div> 
            )
        }           
            </Card>
        </div>
        </div>
    )
}

export default Temp
