export const TabItem = (props) => {
  const { option, isActive, onChange } = props;

  const handleClick = () => {
    onChange(option.value);
  };

  return (
    <div
      className={`tab ${isActive ? 'tab-active' : ''}`}
      onClick={handleClick}
    >
      {option.label}
    </div>
  );
};