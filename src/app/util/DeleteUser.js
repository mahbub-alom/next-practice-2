"use client";

export default function DeleteUser(props) {
  const userId = props.id;
  const deleteuser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "DELETE",
    });
    result =await result.json();
    if(result.success){
        alert("User Deleted Successful")
    }
  };
  return <button onClick={deleteuser}>Delete</button>;
}
