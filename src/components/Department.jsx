
import React, { useState } from 'react';
import axios from 'axios';

const DepartmentForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const formDataWithFile = new FormData();
      formDataWithFile.append('date', formData.date);
      formDataWithFile.append('name', formData.name);
      formDataWithFile.append('description', formData.description);
      formDataWithFile.append('image', file);

      const response = await axios.post('http://localhost:3002/api/departments', formDataWithFile);

     
      console.log('Form submitted successfully:', response);

      
      setFormData({});
      setFile(null);

     
      if (onSubmit) {
        onSubmit(response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      
      setError('Error submitting form. Please try again.');

      
      if (onSubmit) {
        onSubmit(null, error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      {error && <div className="error-message">{error}</div>}
      <label>
        Year founded:
        <input
          type="date"
          name="date"
          value={formData.date || ''}
          onChange={handleChange}
          required
          disabled={submitting}
        />
      </label>
      <br />
      <label>
        Description Image:
        <input type="file" name="image" onChange={handleFileChange} accept="image/*" required />

      </label>
      <br />
      <label>
        Description Name:
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required
          disabled={submitting}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          required
          disabled={submitting}
        />
      </label>
      <br />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Save'}
      </button>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </button>
    </form>
  );
};

export default DepartmentForm;
