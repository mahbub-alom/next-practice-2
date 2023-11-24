import Link from "next/link";
import "../../style.css"
import DeleteUser from "../util/DeleteUser";


async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users");
    data = data.json();
    return data;
}

export default async function Page(){
    let users=await getUsers();
    return(
        <div>
            <h1>User list</h1>
            {
                users.map(item=>(
                    <div className="user-item">
                        <span><Link href={`users/${item.id}`}>{item.name}</Link></span>
                        <span><Link href={`users/${item.id}/update`}>Edit</Link></span>
                        <DeleteUser id={item.id}/>
                    </div>
                ))
            }
        </div>
    )
}