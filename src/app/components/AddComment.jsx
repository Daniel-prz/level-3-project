"use client";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import ViewComments from "./ViewComments";

export default function AddComment({ post, user }) {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const docRef = doc(db, "posts", post.id);
      const ref = await updateDoc(docRef, {
        comments: [
          ...post.comments,
          { userId: user.uid, displayName: auth.currentUser.displayName, text },
        ],
      });
      console.log(ref);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form
        className="flex bg-white border-t border-gray-200 h-20 lg:w-2/3 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className=" text-black mb-2 font-semibold">
          Comment:
          <textarea
            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
            onChange={(e) => setText(e.target.value)}
            value={text}
            name="text"
            id="text"
            required
          ></textarea>
        </label>
        <button className="bg-blue-500 mt-6 h-9 w-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
          +
        </button>
      </form>
    </>
  );
}
