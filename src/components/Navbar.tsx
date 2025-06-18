import type { ReactNode } from "react"
import { FaPizzaSlice, FaIceCream, FaPepperHot } from "react-icons/fa"
import { LuSalad } from "react-icons/lu"
import { MdFastfood } from "react-icons/md"

const Navbar = () => {
  const navLinks: { icon: ReactNode; label: string }[] = [
    { icon: <MdFastfood className="text-lg text-red-600" />, label: "All" },
    { icon: <FaPizzaSlice className="text-lg text-yellow-500" />, label: "drinks" },
    { icon: <FaPizzaSlice className="text-lg text-yellow-500" />, label: "Pizza" },
    { icon: <LuSalad className="text-lg text-green-600" />, label: "Salad" },
    { icon: <FaPepperHot className="text-lg text-orange-500" />, label: "Spicy" },
    { icon: <FaIceCream className="text-lg text-pink-400" />, label: "Sweets" },
  ]

  return (
    <nav className="w-full px-4 py-3 shadow-sm sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center">
        <ul className="flex flex-wrap gap-4 md:gap-6 items-center">
          {navLinks.map((nav, index) => (
            <li key={index} className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-700 hover:text-red-600 transition-all duration-200 cursor-pointer">
              {nav.icon}
              {nav.label}
            </li>
          ))}
        </ul>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
          View All
        </button>
      </div>
    </nav>
  )
}

export default Navbar
