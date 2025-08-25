import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Spinner from '../../component/Spinner'; 
import EditProfile from '../../component/profile/EditProfile';
import PinSetup from '../../component/profile/PinSetup';
import avatar from "../../Assets/humanicon.jpg";
// import SectionContainer from '../../component/SectionContainer'


const Profile = () => {
    const [user, setUser] = useState(null); 
    const [status, setStatus] = useState('IDLE'); 
    const [error, setError] = useState(null); 
    const [activeForm, setActiveForm] = useState(null);

    // Fetch user profile data on component mount
    useEffect(() => {
      const fetchUserProfile = async () => {
          setStatus('PENDING'); 
          try {
              const response = await api.get('/auth/user'); 

              if (response.data.success && response.data.result) {
                
                  const user = response.data.result.user;
                  
                  setUser(user);
                  setStatus('SUCCESS');
              } else {
                  setUser(null); 
                  setStatus('SUCCESS');
              }
          } catch (err) {
             
              setError(err.message);
              setStatus('FAILED');
          }
      };
  
      fetchUserProfile();
  }, []); 
  
    if (status === 'PENDING') {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner /> 
            </div>
        );
    }

    if (status === 'FAILED') {
        return (
            <div className="p-6 bg-white border rounded-xl shadow-lg mt-8">
                <p className="text-red-500">{error}</p> 
            </div>
        );
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-4xl w-full p-6 bg-white border rounded-xl shadow-lg mt-8">
   
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">User Profile</h2>
      
      {user?.profile_image ? (
        <div className="relative group">
          <img 
            src={`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/storage/${user.profile_image}`}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-blue-500 shadow-md">
        <img 
          src={avatar} 
          alt="Avatar" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      )}
    </div>

    
    {user ? (
      <div className="space-y-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">First Name</h4>
            <p className="text-gray-500">{user.name}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Last Name</h4>
            <p className="text-gray-500">{user.lastname}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Middle Name</h4>
            <p className="text-gray-500">{user.middlename || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Gender</h4>
            <p className="text-gray-500">{user.gender || 'Not specified'}</p>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Email</h4>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Phone</h4>
            <p className="text-gray-500">{user.phone_number}</p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Address</h4>
            <p className="text-gray-500">{user.address || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Date of Birth</h4>
            <p className="text-gray-500">
              {user.dob ? new Date(user.dob).toLocaleDateString() : 'Not specified'}
            </p>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">State of Origin</h4>
            <p className="text-gray-500">{user.sog || 'Not specified'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Joined On</h4>
            <p className="text-gray-500">
              {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

      
        <div className="flex flex-col sm:flex-row items-center justify-center mt-12 gap-4">
          <button
            onClick={() => setActiveForm('pinsetup')}
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full sm:w-48 text-center transition-colors"
          >
            Set Pin Validation
          </button>
          <button
            onClick={() => setActiveForm('editprofile')}
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full sm:w-48 text-center transition-colors"
          >
            Edit Profile
          </button>
        </div>

       
        {activeForm === 'editprofile' && (
          <EditProfile 
            setActiveForm={setActiveForm} 
            currentProfileImage={user.profile_image}
          />
        )}
        {activeForm === 'pinsetup' && <PinSetup setActiveForm={setActiveForm} />}
      </div>
    ) : (
      <div className="text-center text-gray-500">
        <p>Loading user profile...</p>
      </div>
    )}
  </div>
</div>
  );
};

export default Profile;

