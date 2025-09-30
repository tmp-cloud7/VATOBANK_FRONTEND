import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPin, verifyPin, resetPinStatus, fetchPinStatus, fetchPinError } from '../../features/onboard/pinSlice';
import { useNavigate } from 'react-router-dom';

const PinPage = () => {
  const [pin, setPinInput] = useState('');
  const [pinConfirm, setPinConfirm] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const pinStatus = useSelector(fetchPinStatus);
  const pinError = useSelector(fetchPinError);

  useEffect(() => {
    dispatch(resetPinStatus());
  }, [dispatch]);

  const handleSetPin = (e) => {
    e.preventDefault();
    if (pin !== pinConfirm) {
      alert("Pins don't match! Please try again.");
      return;
    }

    dispatch(setPin({ pin }));
  };

  const handleVerifyPin = (e) => {
    e.preventDefault();

    if (!pin) {
      alert("Please enter your pin to verify.");
      return;
    }
    dispatch(verifyPin({ pin }));
  };

  const renderStatus = () => {
    switch (pinStatus) {
      case 'PENDING':
        return <p className="text-blue-500">Processing...</p>;
      case 'SUCCESS':
        return <p className="text-green-500">Success!</p>;
      case 'FAILED':
        if (pinError) {
          return (
            <div className="text-red-500">
              <p>{pinError.message || 'Error occurred. Please try again.'}</p>
              {pinError.error_code && <p>Error Code: {pinError.error_code}</p>}
            </div>
          );
        }
        return <p className="text-red-500">Error occurred. Please try again.</p>;
      default:
        return null;
    }
  };
  
  useEffect(() => {
    if (pinStatus === 'SUCCESS') {
      setTimeout(() => {
        navigate('/'); 
      }, 1000);
    }
  }, [pinStatus, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">{isVerifying ? 'Verify Your Pin' : 'Set Your Pin'}</h2>
        <form onSubmit={isVerifying ? handleVerifyPin : handleSetPin} className="space-y-4">
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">Enter Pin</label>
            <input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {!isVerifying && (
            <div>
              <label htmlFor="pinConfirm" className="block text-sm font-medium text-gray-700">Confirm Pin</label>
              <input
                id="pinConfirm"
                type="password"
                value={pinConfirm}
                onChange={(e) => setPinConfirm(e.target.value)}
                className="w-full px-4 py-2 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={pinStatus === 'PENDING'} 
            >
              {isVerifying ? 'Verify Pin' : 'Set Pin'}
            </button>
          </div>
        </form>

        {renderStatus()}

        {!isVerifying && (
          <button
            onClick={() => setIsVerifying(true)}
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Already set a pin? Verify here.
          </button>
        )}
      </div>
    </div>
  );
};

export default PinPage;
