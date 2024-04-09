export const TabItem = (props) => {
  const { option, isActive, onChange, renderTab } = props;

  const handleClick = () => {
    onChange(option.value);
  };

  return (
    <div
      className={`tab ${isActive ? 'tab-active' : ''}`}
      onClick={handleClick}
    >
      {option.label}
      {/* {renderTab()} */}
    </div>
  );
};