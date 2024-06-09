const Card = (prop) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: prop.color, marginRight: prop.margin }}
    >
      <img src={prop.img} alt={prop.content} />
      <p className="content-card">{prop.content}</p>
      <p className="rate-card">{prop.rate}</p>
      <p className="status-card">{prop.status}</p>
    </div>
  );
};

export default Card;
