import { TabItem } from './TabItem';

export const Tabs = (props) => {
  const { options, activeTab, renderTab, onChange, refElement } = props;

  return (
    <div className="tabs-container" ref={refElement}>
      {options.map((option) => (
        <TabItem
          key={option.value}
          option={option}
          isActive={option.value === activeTab}
          renderTab={renderTab}
          onChange={onChange}
        />
      ))}
      <div className="tab-line"></div>
    </div>
  );
};
