import React, { useState } from 'react';
import { DatePicker, Button, Input } from 'antd';
import 'rc-picker/assets/index.css';

const LocationPicker = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleGoToLocation = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
    console.log('Selected Location:', selectedLocation);
    
    window.location.href = `https://maps.google.com/?q=${selectedLocation}`;
  };

  return (
    <div>
      
      <Input
        placeholder="Enter Location"
        onChange={handleLocationChange}
        required style={{width:"min-content"}}
      /><DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      onChange={handleDateChange}
      placeholder="Select Date and Time"style={{width:"min-content"}}
       aria-required
    />
      <Button type="primary" onClick={handleGoToLocation} >
        Go to Location
      </Button>
    </div>
  );
};

export default LocationPicker;
