
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

  const handleCountryCodeChange = (value) => {
    setSelectedCountryCode(value);
  };

  const onFinish = async (values) => {
    console.log('Submitted values:', values);
    try {
      const { Name, email, Address, mobileNumber, message } = values;

      const response = await axios.post("http://localhost:3002/submit-form", {
         Name,
        email,
         Address,
        mobileNumber,
        message,
      });

      console.log('Server response:', response.data);

      setSubmitted(true);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {!submitted ? (
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Mobile Number" style={{ display: 'flex' }}>
            <Select
              onChange={handleCountryCodeChange}
              style={{ width: 80, marginRight: '8px' }}
              value={selectedCountryCode}
            >
              <Option value="+1">+1</Option>
              <Option value="+44">+44</Option>
              <Option value="+91">+91</Option>
              <Option value="+62">+62</Option>
            </Select>
            <Form.Item
              name="mobileNumber"
              noStyle
              rules={[{ required: true, message: 'Please enter your mobile number' }]}
            >
              <Input placeholder="Enter Mobile Number" style={{ width: '200px' }} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div>
          <p>Thank you for submitting the enquiry!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
