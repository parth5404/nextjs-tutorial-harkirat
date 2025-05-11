import Navbar from "@/Components/Navbar"



export default function Layout({children}:any){
return <div>
<Navbar/>
    {children}
</div>
}