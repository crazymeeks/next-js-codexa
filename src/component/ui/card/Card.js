const Card = ({children}) => {

  return (
    <div className="card border rounded border-gray-600 w-40">
    {children}
    </div>
  );

};

export default Card;