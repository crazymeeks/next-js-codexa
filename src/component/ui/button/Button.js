



const Button = ({ title,  ...props }) => {
  return (
    <div {...props}>
      <input type="button" value={title}/>
    </div>
  );
};

export default Button;