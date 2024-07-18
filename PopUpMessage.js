import React from 'react';

const PopUpMessage = ({ showPopUp, setShowPopUp, restaurant }) => {
  if (!showPopUp) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{restaurant.Name}</h2>
        <p><strong>City:</strong> {restaurant.City}</p>
        <p><strong>Cost:</strong> {restaurant.Cost}</p>
        <p><strong>Cuisine:</strong> {restaurant.Cuisine}</p>
        <p><strong>Location:</strong> {restaurant.Location}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => setShowPopUp(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpMessage;
