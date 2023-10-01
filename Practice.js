// Practice.js
import React, { useState } from 'react';
import './Practice.css';

function Practice() {
  const [inp, setInp] = useState('');
  const [err, setErr] = useState('');

  const handleInputChange = (e) => {
    setInp(e.target.value);
    setErr(''); // Clear any previous error message when the input changes
  };

  const handleSubmit = () => {
    if (inp.trim().length === 0) {
      setErr('Input field is empty');
    } else if (!isValidEmail(inp)) {
      setErr('Email address is not formatted correctly');
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="divi0">
      <div className="p1"></div>
      <div className="base">BASE</div>
      <div className="apparel">APPAREL</div>
      <div className="divi1"></div>
      <p className="were">WE’RE</p>
      <p className="coming">COMING</p>
      <p className="soon">SOON</p>
      <div className="lorem">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <p className="error" style={{ color: 'red' }}>
        {err}
      </p>
      <input
        className="input"
        type="text"
        value={inp}
        onChange={handleInputChange}
        placeholder="Email Address"
      />
      <button className="btn" type="button" onClick={handleSubmit}>
        
      </button>
      <span className="footer"></span>
    </div>
  );
}

export default Practice;
