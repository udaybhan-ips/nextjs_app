"use client"
import React,{useEffect, useState} from 'react'


export default function Users(){
    const [users, setUsers] = useState<string[]>([])
    const [error, setError] = useState<string | null>(null)
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            const tmpData = data.map((user:{name:string})=> ( user.name ) )
            setUsers(tmpData)
        }).catch(()=>{
            setError("Error fetching users!")
        })
    },[])

    return(
        <div>
            <h1>
                Users
            </h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user)=>{
                    return(
                        <li key={user}>{user}</li>
                    )
                })}
            </ul>
        </div>
    )
}