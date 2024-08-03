const Button = ({ text, onClickHandle }) => {
  return (
    <button className="btn" onClick={onClickHandle}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
};

export default Button;
