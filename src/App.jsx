import { useState } from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

const options = [
  { value: '1', label: 'Tab One' },
  { value: '2', label: 'Tab Two' },
  { value: '3', label: 'Tab Three' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState(options[0].value);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  const renderTab = (option) => {
    return <>{option.label}</>;
  };

  const onChange = (value) => {
    console.log('Tab:', value);
  };

  return (
    <div className="container">
      <Tabs
        options={options}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        renderTab={renderTab}
        onChange={onChange}
      />
    </div>
  );
};

// options : [{ value: ‘1’, label: ‘Tab One’}, { value: ‘12, label: ‘Tab Two’}]
// value: { value: ‘1’, label: ‘Tab One’},
// renderTab - рендер функция, которая позволяет нам вставлять кастомное содержимое таб-айтема
// onChange - функция, которая будет отправлять нам на верх обновления
