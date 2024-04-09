import React, { useState } from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

const options = [
  { value: '1', label: 'Tab One' },
  { value: '2', label: 'Tab Two' },
  { value: '3', label: 'Tab Three' },
];

const renderTab = () => {
  // Custom Array Of Labels.map((item) => (
  //   <>{item.label}</>
  // ))
};

export const App = () => {
  const [activeTab, setActiveTab] = useState(options[0].value);

  const onChange = (value) => {
    console.log('Tab:', value);
    setActiveTab(value);
  };

  return (
    <div className="container">
      <Tabs
        options={options}
        activeTab={activeTab}
        renderTab={renderTab}
        onChange={onChange}
      />
    </div>
  );
};
