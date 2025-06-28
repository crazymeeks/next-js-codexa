const Card = ({children, button}) => {

  return (
    <div className="card border rounded border-gray-600 w-40">
    {children}
    {button}
    </div>
  );

};

export default Card;