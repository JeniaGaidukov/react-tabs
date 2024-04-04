import { TabItem } from './TabItem';

export const Tabs = (props) => {
  const { options, activeTab, onTabClick, renderTab, onChange } = props;
  return (
    <div className="tabs-container">
      {options.map((option) => (
        <TabItem
          key={option.value}
          option={option}
          isActive={option.value === activeTab}
          onTabClick={onTabClick}
          renderTab={renderTab}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
