const SlopeButton = ({
  onClick,
  dark = false,
  fullWidth = false,
  children,
}) => {
  return (
    <button
      className={
        "slope-button " +
        (fullWidth ? "full-width " : "") +
        (dark ? "dark " : "")
      }
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default SlopeButton;
