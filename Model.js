import React from 'react';

const PopUpMessage = ({ showPopUp, setShowPopUp, message }) => {
    if (!showPopUp) {
      return null;
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{restaurant.Name}</h2>
        <p><strong>City:</strong> {restaurant.City}</p>
        <p><strong>Cost:</strong> {restaurant.Cost}</p>
        <p><strong>Cuisine:</strong> {restaurant.Cuisine}</p>
        <p><strong>Location:</strong> {restaurant.Location}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
