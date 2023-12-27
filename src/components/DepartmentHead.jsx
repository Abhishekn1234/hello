import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';
const DepartmentHead = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    employeeNumber: '',
    age: '',
    profileImage: null,
    profileDescription: '',
    department: '',
  });

  useEffect(() => {
    
    axios.get('http://localhost:3002/department_heads')
      .then(response => {
        setDepartmentHeads(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleDelete = (id) => {
    // Delete a department head by ID
    axios.delete(`http://localhost:3002/delete_department_head/${id}`)
      .then(response => {
        console.log(response.data);
        setDepartmentHeads(prevHeads => prevHeads.filter(head => head._id !== id));
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleUpdate = (id) => {
    // Update a department head by ID
    const updatedHead = new FormData();
    updatedHead.append('name', formData.name);
    updatedHead.append('employeeNumber', formData.employeeNumber);
    updatedHead.append('age', formData.age);
    updatedHead.append('profileImage', formData.profileImage);
    updatedHead.append('profileDescription', formData.profileDescription);
    updatedHead.append('department', formData.department);
    if (!isValidObjectId(formData.department)) {
        console.error('Invalid department value');
        // Handle or display an error message on the frontend
        return;
      }
      const isValidObjectId = mongoose.Types.ObjectId.isValid;    
    axios.put(`http://localhost:3002/update_department_head/${id}`, updatedHead)
      .then(response => {
        console.log(response.data);
        
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleFileChange = (e) => {
    // Handle file input change
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    // Handle other input changes
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Handle form submission to add a new department head
    e.preventDefault();

    const newHead = new FormData();
    newHead.append('name', formData.name);
    newHead.append('employeeNumber', formData.employeeNumber);
    newHead.append('age', formData.age);
    newHead.append('profileImage', formData.profileImage);
    newHead.append('profileDescription', formData.profileDescription);
    newHead.append('department', formData.department);

    axios.post('http://localhost:3002/add_department_head', newHead)
      .then(response => {
        console.log(response.data);
        // Optionally, update the local state with the added data
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Department Head List</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Add input fields for creating a new department head */}
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/><br/>

        <label>Employee Number:</label>
        <input type="text" name="employeeNumber" value={formData.employeeNumber} onChange={handleInputChange} required/><br/>

        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleInputChange} required/><br/>

        <label>Profile Image:</label>
        <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" required/><br/>

        <label>Profile Description:</label>
        <textarea name="profileDescription" value={formData.profileDescription} onChange={handleInputChange} required></textarea><br/>

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={handleInputChange} required/><br/>

        <button type="submit">Add Department Head</button>
      </form>

      {departmentHeads.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee Number</th>
              <th>Age</th>
              <th>Profile Image</th>
              <th>Profile Description</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departmentHeads.map(head => (
              <tr key={head._id}>
                <td>{head.name}</td>
                <td>{head.employeeNumber}</td>
                <td>{head.age}</td>
                <td>
                  <img src={`http://localhost:3002/uploads/${head.profileImage}`} alt={head.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{head.profileDescription}</td>
                <td>{head.department}</td>
                <td>
                  <button onClick={() => handleUpdate(head._id)}>Update</button>
                  <button onClick={() => handleDelete(head._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No department heads available.</p>
      )}
    </div>
  );
};

export default DepartmentHead;
