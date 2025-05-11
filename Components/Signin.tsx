"use client"

import axios from "axios"
import React from "react"

export function Signin() {
const [user,setuser]=React.useState("")
const[pwd,setpwd]=React.useState("")
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <label htmlFor="username" className="sr-only">Username</label>
            <input
            id="username"
            placeholder="Enter your username"
            value={user}
            onChange={(e)=>setuser(e.target.value)}
            />
            <label htmlFor="password" className="sr-only">Password</label>
            <input
            id="pwd"
            placeholder="Enter your pwd"
            value={pwd}
            onChange={(e)=>setpwd(e.target.value)}
            />

            <button  onClick={()=>{
                axios.post("http://localhost:3000/api/v1/user/details",{
                    user,
                    pwd
                })
            }

            }   
            
            > SignIn</button>
            
        </div>
    </div>
}

// interface LabelledInputType {
//     label: string;
//     placeholder: string;
//     type?: string;
// }

// function LabelledInput({ label, placeholder, type }: LabelledInputType) {
//     return <div>
//         <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
//         <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
//     </div>
// }