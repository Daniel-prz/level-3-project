"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import Header from "../components/Header";
import AddPost from "../components/AddPost";
import Posts from "./components/Posts";
import Modal from "../components/Modal";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [show, setshow] = useState(true);
  const [user, setuser] = useState(null);
  function onShow(bool) {
    setshow(bool);
  }
  const router = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsub();
  }, []);
  return (
    <main>
      <Header />
      <AddPost onShow={onShow} />
      <Posts />
      {show && <Modal isNew={true} onShow={onShow} />}
      <Sponsors />
      <Footer />
    </main>
  );
}
