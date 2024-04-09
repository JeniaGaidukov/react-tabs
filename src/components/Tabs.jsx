import { useEffect, useRef } from 'react';
import { TabItem } from './TabItem';

export const Tabs = (props) => {
  const { options, activeTab, renderTab, onChange } = props;
  const refElement = useRef(null);
  const tabLineRef = useRef(null);

  useEffect(() => {
    const tabIndex = options.findIndex((option) => option.value === activeTab);
    const tabElement = refElement.current.children[tabIndex];

    // const tabWidth = tabElement.offsetWidth;
    // const tabOffset = tabElement.offsetLeft;
    const rect = tabElement.getBoundingClientRect();
    const tabWidth = rect.width;
    const tabOffset = rect.left - refElement.current.getBoundingClientRect().left;

    tabLineRef.current.style.transform = `translateX(${tabOffset}px)`;
    tabLineRef.current.style.width = `${tabWidth}px`;
  }, [activeTab, options]);

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
      <div className="tab-line" ref={tabLineRef}></div>
    </div>
  );
};
