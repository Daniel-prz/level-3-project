"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";

export default function Signin() {
  const errors = {
    "Firebase: Error (auth/invalid-credential).": "Invalid email or password",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setError("");
      router.push("/");
    } catch (error) {
      console.error("It failed to sign in", error);
      setError(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant={"danger"}>{errors[error.message]}</Alert>}

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
      <button className="btn btn-primary">Signin!</button>
    </form>
  );
}
