"use client";
import AddComment from "@/app/components/AddComment";
import Modal from "@/app/components/Modal";
import ViewComments from "@/app/components/ViewComments";
import { auth, db } from "@/app/firebaseConfig";
import Edit from "@/app/svgs/Edit";
import Trash from "@/app/svgs/Trash";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";

export default function Post({ post, user }) {
  const [show, setShow] = useState(false);
  function onShow(bool) {
    setShow(bool);
  }
  async function handleDelete() {
    const postRef = doc(db, "posts", post.id);
    try {
      await deleteDoc(postRef);
    } catch (error) {
      console.error("error deleting doc", error);
    }
  }
  return (
    <>
      {show && <Modal id={post.id} onShow={onShow} isNew={false} />}
      <div className="flex flex-col justify-center bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-60 mt-20 mx-auto  rounded-lg overflow-hidden  font-[sans-serif] ">
        <div className="px-4 py-6">
          <div className="flex flex-col items-center">
            <p className="text-lime-950">{post.displayName} posted</p>
            <h3 className="mt-2 text-lime-950">
              {post.title} - {post.artist}
            </h3>
            <p className="text-lime-950">{post.genre}</p>

            <Link
              target="blank"
              href={post.url}
              className="font-bold text-lime-950 text-xl mt-2"
            >
              Listen
            </Link>
          </div>
          <div className="flex justify-around">
            {user.uid === post.userId && <Trash handleDelete={handleDelete} />}
            {user.uid === post.userId && (
              <div onClick={() => setShow(true)}>
                <Edit />
              </div>
            )}
          </div>{" "}
        </div>
        <AddComment post={post} />
        <ViewComments post={post} user={user} />
      </div>
    </>
  );
}
