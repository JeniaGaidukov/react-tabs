import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

const options = [
  { value: '1', label: 'Tab One' },
  { value: '2', label: 'Tab Two' },
  { value: '3', label: 'Tab Three' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState(options[0].value);
  const refElement = useRef(null);
  const renderTab = (option) => {
    return <>{option.label}</>;
  };

  const onChange = (value) => {
    console.log('Tab:', value);
    setActiveTab(value);
  };

  useEffect(() => {

    // const tabIndex = options.findIndex((option) => option.value === activeTab);
    // Альтернативное решение если в массиве будут разные значения
    
    const tabWidth = refElement.current.children[activeTab - 1].offsetWidth;
    const tabOffset = refElement.current.children[activeTab - 1].offsetLeft;
    refElement.current.querySelector(
      '.tab-line'
    ).style.transform = `translateX(${tabOffset}px)`;
    refElement.current.querySelector('.tab-line').style.width = `${tabWidth}px`;
  }, [activeTab]);

  return (
    <div className="container">
      <Tabs
        options={options}
        activeTab={activeTab}
        renderTab={renderTab}
        onChange={onChange}
        refElement={refElement}
      />
    </div>
  );
};
