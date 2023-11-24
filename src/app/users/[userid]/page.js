async function getUsers(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data= await data.json()
    return data.result;
}

export default async function Page({params}){
    const user= await getUsers(params.userid)
    return(
        <div>
            <h2>user details</h2>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>email: {user.email}</h3>
        </div>
    )
}