import React, { useState } from 'react';
import axios from 'axios';


// Set up modal options

const UpdateInstitute = () => {
  const [id, setId] = useState('');
  const [updatedData, setUpdatedData] = useState({ name: '', location: '' });
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5020/updateInstitute/${id}`, updatedData);
      if (response.status === 200) {
        setMessage('Institute updated successfully');
        setModalIsOpen(true); // Open the modal
        // Update your local state or refetch the data if needed
      }
    } catch (error) {
      setMessage('Error updating institute');
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };

  return (
    <div>
      <h2>Update Institute</h2>
      <input
        type="text"
        placeholder="Institute ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Name"
        value={updatedData.name}
        onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="New Location"
        value={updatedData.location}
        onChange={(e) => setUpdatedData({ ...updatedData, location: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
      
      {/* Modal for displaying a message or confirmation */}
     
        <h2>Update Confirmation</h2>
        <p>{message}</p>
        <button onClick={closeModal}>Close</button>

    </div>
  );
};

export default UpdateInstitute;
