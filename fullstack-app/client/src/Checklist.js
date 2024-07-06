import React, { useState, useEffect } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={item.completed} readOnly />
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Checklist;
