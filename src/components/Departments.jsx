
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Department from './Department';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/api/departments')
      .then(response => {
        setDepartments(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching departments. Please try again.');
        setLoading(false);
        console.error('Error fetching departments:', error);
      });
  }, []);

  const handleAdd = () => {
    setEditingDepartment({
      name: '',
      description: '',
      image: '', 
       date:''

    });
  };
  

  const handleEdit = (department) => {
    setEditingDepartment(department);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this department?');
    if (confirmDelete) {
      axios.delete(`http://localhost:3002/api/departments/${id}`)
        .then(() => {
          setDepartments(departments.filter(department => department._id !== id));
        })
        .catch(error => {
          setError('Error deleting department. Please try again.');
          console.error('Error deleting department:', error);
        });
    }
  };

  const handleFormSubmit = (formData) => {
    if (editingDepartment) {
      axios.put(`http://localhost:3002/api/departments/${editingDepartment._id}`, formData)
        .then(response => {
          setDepartments(departments.map(department => (department._id === response.data._id ? response.data : department)));
          setEditingDepartment(null);
        })
        .catch(error => {
          setError('Error updating department. Please try again.');
          console.error('Error updating department:', error);
        });
    } else {
      axios.post('http://localhost:3002/api/departments', formData)
        .then(response => setDepartments([...departments, response.data]))
        .catch(error => {
          setError('Error adding department. Please try again.');
          console.error('Error adding department:', error);
        });
    }
  };

  return (
    <div>
      <h1>Department Management</h1>
      {loading && <p>Loading departments...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleAdd}>Add Department</button>
      {editingDepartment && (
       <Department
          onSubmit={handleFormSubmit}
          onCancel={() => setEditingDepartment(null)}
          initialData={editingDepartment}
        />
      )}

      <table style={{border:"1px solid black"}}>
        <thead>
          <tr>
            <th style={{border:"1px solid black"}}>Name</th>
            <th style={{border:"1px solid black"}}>Description</th>
            <th style={{border:"1px solid black"}}>Image</th>
            <th style={{border:"1px solid black"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department._id}>
              <td style={{border:"1px solid black"}}>{department.name}</td>
              <td style={{border:"1px solid black"}}>{department.description}</td>
              <td style={{ border: "1px solid black" }}>
            {department.image && (
                <img
                  src={`http://localhost:3002/uploads/${department.image}`}
                  alt={department.name}
                  style={{ maxWidth: '100px' }}
                />
              )}
            </td>
              <td style={{border:"1px solid black"}}>
                <button onClick={() => handleEdit(department)}>Edit</button>
                <button onClick={() => handleDelete(department._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
