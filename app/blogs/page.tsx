import axios from "axios";
async function fetchdata(){
    const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
    return res.data;
}


export default async function Blog(){
const data=await fetchdata();
console.log(data)

    return <div>{
        data.map(function(sher:any,index:number){
            return <div key={index}>
                {sher.title}

            </div>
        })
        
        
        }</div>
}
