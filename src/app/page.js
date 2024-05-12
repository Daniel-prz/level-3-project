"use client";

import Header from "./components/Header";
import LocalNews from "./components/LocalNews";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Footer from "./components/Footer";
export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  });

  function getUser(user) {
    setUser(user);
  }

  return (
    <main>
      <Header getUser={getUser} />
      <Hero />
      <LocalNews />
      <Sponsors />
      <Footer />
    </main>
  );
}
