const Card = (prop) => {
  return (
    <div
      className="h-[14rem] w-[14rem] p-2 lg:p-4 rounded-[12px] card"
      style={{ backgroundColor: prop.color, marginRight: prop.margin }}
    >
      <img src={prop.img} alt={prop.content} className="w-[80p] p-1 " />
      <p className="font-[Manrope] font-medium text-[#072635] ">
        {prop.content}
      </p>
      <p className="font-[Manrope] font-bold text-[#072635] ">{prop.rate}</p>
      <p className="font-[Manrope] font-medium text-[#072635] ">
        {prop.status}
      </p>
    </div>
  );
};

export default Card;
