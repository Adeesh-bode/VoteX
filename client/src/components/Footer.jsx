import React from 'react';

function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Your contact details or form can go here. Adjust according to your needs.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
