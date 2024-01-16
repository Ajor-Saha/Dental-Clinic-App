import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/authSlice";
import MainLayout from "../components/MainLayout";

const ProfilePage = () => {
  const user = useSelector(selectUser);


  if (!user) {
    // If user is undefined or null, you can redirect or render an appropriate message
    return <div>User not found or not logged in.</div>;
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto mt-10">
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="mb-4">
              <strong>Name:</strong> {user.username || 'N/A'}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {user.email || 'N/A'}
            </div>
            {/* Add more user information fields as needed */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
