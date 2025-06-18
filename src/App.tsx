import { foods } from "./assets/data"
import FoodCompo from "./components/Food"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCompo
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
            price={food.price}
            discount={food.discount}
            rating={food.rating}
          />
        ))}
      </section>
    </div>
  )
}

export default App
