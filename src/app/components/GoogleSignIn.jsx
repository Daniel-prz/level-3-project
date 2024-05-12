import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
auth;
export default function GoogleSignIn({ getUser }) {
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      getUser(user);
    } catch {}
  }
  return (
    <button
      onClick={handleGoogleSignIn}
      className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
    >
      Login with Google
    </button>
  );
}
