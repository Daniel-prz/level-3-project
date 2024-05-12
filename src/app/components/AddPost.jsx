export default function AddPost({ onShow }) {
  return (
    <div className="flex pt-10 justify-center bg-blue-100">
      <button
        className="mb-5 flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded-lg text-4xl transition duration-300 ease-in-out"
        onClick={() => onShow(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 6a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V7a1 1 0 011-1z" />
        </svg>
        Add Post!
      </button>
    </div>
  );
}
