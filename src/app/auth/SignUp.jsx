"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: username });
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
      router.push("/");
    } catch (error) {
      console.error("It didnt create a user", error);
      setError(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant={"danger"}>{error}</Alert>}
      <label>
        Username:
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="User Name"
          type="text"
          value={username}
          name="username"
        />
      </label>
      <label>
        Email:
        <input
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          placeholder="username@example.com"
          type="email"
          value={email}
          name="email"
        />
      </label>
      <label>
        Password:
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          name="password"
        />
      </label>
      <button className="btn btn-primary">Sign up</button>
    </form>
  );
}
