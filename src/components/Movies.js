import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
function Movies() {
 
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
         const movies = localStorage.getItem('moviedata')
         setdata(JSON.parse(movies))
         setLoading(false)
         console.log(data)
    }, [])

    return (
        <div>
            { !loading && data.map(item =><MovieCard data={item}/>)}
        </div>
    )
}

export default Movies
