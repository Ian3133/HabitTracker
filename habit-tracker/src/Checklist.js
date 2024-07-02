// src/Checklist.js
import React, { useState } from 'react';
import './Checklist.css'; // Import CSS for styling

const Checklist = () => {
  const [items, setItems] = useState([     // here set for __ in SQL matrex
    { text: 'AM Practice', completed: false },
    { text: 'Weight/Curcit', completed: false },
    { text: 'Streching', completed: false },
    { text: '', completed: false },
    { text: 'Supplements', completed: false },
    { text: 'Start at Time', completed: false },
    { text: 'Reading', completed: false },
    { text: 'Git', completed: false },
  ]);

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
