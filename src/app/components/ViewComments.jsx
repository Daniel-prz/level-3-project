import { db } from "../firebaseConfig";

export default function ViewComments({ post, user }) {
  return (
    <div className="w-full lg:w-2/3 mx-auto">
      {post.comments.map((comment, index) => (
        <div
          className="bg-white border-t border-gray-200 px-4 py-3 first:pt-0"
          key={index}
        >
          <p className="font-semibold text-black text-sm">
            {comment.displayName}
          </p>
          <p className="text-black text-sm">{comment.text}</p>
          {console.log(comment)}
        </div>
      ))}
    </div>
  );
}
