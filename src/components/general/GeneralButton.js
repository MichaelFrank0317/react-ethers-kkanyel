const Button = ({ onClick, dark = false, rounded = false, shadow = false, children}) => {
  return (
    <button 
      className={
        "button " +
        (rounded ? "rounded " : "") +
        (shadow ? "shadow " : "") +
        (dark ? "dark " : "")
      }
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
