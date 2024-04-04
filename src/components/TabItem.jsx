

export const TabItem = (props) => {
  const { option, isActive, onTabClick, renderTab, onChange } = props;
  const handleClick = () => {
    onTabClick(option.value);
    onChange(option.value);
  };

  return (
    <div
      className={`tab ${isActive ? 'tab-active' : ''}`}
      onClick={handleClick}
    >
      {renderTab(option)}
    </div>
  );
};
