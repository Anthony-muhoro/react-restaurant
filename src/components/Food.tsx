type Props = {
  image: string
  title: string
  description: string
  price: number
  discount: number
  rating: number
}

const FoodCompo = ({ image, title, description, price, discount, rating }: Props) => {
 
  
  return (
    <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-2.5 py-1 rounded-full font-bold">
            -{discount}%
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-white text-amber-600 text-sm px-2 py-1 rounded-full border border-amber-200">
          ⭐ {rating.toFixed(2)}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center gap-2 pt-1">
        <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default FoodCompo