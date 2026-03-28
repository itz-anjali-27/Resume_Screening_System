import { useRef, useState } from "react";

export default function ProfileCard() {
  const fileRef = useRef();
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-[#020617] p-6 rounded-xl text-center">

      <div className="relative w-28 h-28 mx-auto">
        <img
          src={image || "https://via.placeholder.com/150"}
          className="w-full h-full rounded-full object-cover border-4 border-gray-700"
        />

        <button
          onClick={() => fileRef.current.click()}
          className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-xs"
        >
          ✏️
        </button>
      </div>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileRef}
        onChange={handleImage}
        className="hidden"
      />

      <h2 className="mt-4 text-lg font-semibold">Alex Johnson</h2>
      <p className="text-gray-400 text-sm">Senior Frontend Developer</p>

      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="font-bold">24</p>
          <p className="text-gray-400">Applications</p>
        </div>
        <div>
          <p className="font-bold">156</p>
          <p className="text-gray-400">Profile Views</p>
        </div>
      </div>
    </div>
  );
}