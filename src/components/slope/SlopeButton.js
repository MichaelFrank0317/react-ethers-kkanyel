const SlopeButton = ({
  onClick,
  dark = false,
  fullWidth = false,
  disabled = false,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      className={
        "slope-button " +
        (fullWidth ? "full-width " : "") +
        (dark ? "dark " : "") +
        (disabled ? "disabled" : "")
      }
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default SlopeButton;
