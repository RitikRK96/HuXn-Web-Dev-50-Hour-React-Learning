import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    })


  return (
    <div>
        <h1>First Post</h1>
        {posts.length>0 ? <h3>{posts[0].title}</h3> : <p>Loading...</p> }
    </div>
  )
}

export default FetchDataEffect