import "./button.scss";

const Button = ({ classNameColor, content }) => {
  return (
    <>
      <button className={`button-container-${classNameColor}`}>{content}</button>
    </>
  );
};

export default Button;
