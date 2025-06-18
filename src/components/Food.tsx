type Props = {
  image: string
  title: string
  description: string
  price: number
  discount: number
  rating:number
}

const FoodCompo = ({ image, title, description, price, discount,rating }: Props) => {
  return (
    <div className="w-full max-w-md shadow-md rounded-md overflow-hidden relative ">

      <div className="h-[200px] ">
        {discount>0 && <span className="text-bold text-white bg-orange-400 absolute">-{discount}%</span>}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
       <span className="text-bold bg-white text-black border ">⭐{rating}</span>
        
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
           
        </div>
      </div>
     
    </div>
  )
}

export default FoodCompo
