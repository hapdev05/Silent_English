import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// import db from "../../../firebase/"; 

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm đọc dữ liệu từ Firestore
  const fetchData = async () => {
    try {
      // Đọc dữ liệu từ collection 'score89888'
      const querySnapshot = await getDocs(collection(db, "score89888"));
      querySnapshot.forEach((doc) => {
        // In từng document ra console
        console.log("Document ID:", doc.id);
        console.log("Data:", doc.data());
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In dữ liệu form ra console
    console.log({ email, password });

    // Gọi hàm đọc dữ liệu từ Firestore
    fetchData();
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-gray-800">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/4366/4366-720.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Form container */}
      <div className="relative w-96 backdrop-blur-lg bg-gray-900 bg-opacity-20 rounded-lg shadow-lg p-5 text-white z-10">
        <h2 className="text-2xl font-bold pb-5">Sign In With Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="gmail@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
