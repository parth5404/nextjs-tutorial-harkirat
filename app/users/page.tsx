import React from 'react'
import axios from "axios"

export default async function User (){
const res=await axios.get("http://localhost:3000/api/v1/user/details")

const data=res.data;

  return (
    <div>
 {data.user}
    </div>
  )
}


