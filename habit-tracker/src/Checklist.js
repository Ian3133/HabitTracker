import React, { useState, useEffect } from 'react';
import './Checklist.css'; // Import CSS for styling

const Checklist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  const toggleCompletion = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {    
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="checklist">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.completed ? 'completed' : ''}
            onClick={() => toggleCompletion(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
