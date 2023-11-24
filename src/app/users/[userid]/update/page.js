"use client";
import { useEffect, useState } from "react";
import "../../../../style.css";

export default function Update({ params }) {
  let id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const getUserDetails = async () => {
    try {
      let data = await fetch("http://localhost:3000/api/users/" + id);
      data = await data.json();
      setName(data.result.name);
      setAge(data.result.age);
      setEmail(data.result.email);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();

    if (result.success) {
      alert("user information updated success");
    } else {
      alert("please try again with valid input");
    }
  };

  return (
    <div className="add-user">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="input-field"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Age"
        className="input-field"
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <button onClick={updateUser} className="btn">
        Update User
      </button>
    </div>
  );
}
