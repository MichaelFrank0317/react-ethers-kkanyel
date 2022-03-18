const Text = ({ small = false, bold = false, children }) => {
  return (
    <div className={"text " + (small ? "small " : "") + (bold ? "bold " : "")}>
      {children}
    </div>
  );
};

export default Text;
