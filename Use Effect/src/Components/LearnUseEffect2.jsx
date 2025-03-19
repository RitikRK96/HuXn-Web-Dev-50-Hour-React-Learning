import React, { useEffect, useState } from 'react'

const LearnUseEffect2 = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if (data && data.length) setData(data);
        }

        getData();
    },[]);

  return (
    <div>
        <ul>
            {data.map((todo)=>(
                <li key={todo.id} >{todo.title}</li>,
                <li key={todo.id} >{todo.body}</li>
            ))}
        </ul>
    </div>
  )
}

export default LearnUseEffect2;