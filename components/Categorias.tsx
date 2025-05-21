import Image from 'next/image'

const categorias = [
  { nome: 'Mac', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'iPhone', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'iPad', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'Apple Watch', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'AirPods', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'AirTag', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'Apple TV 4K', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
  { nome: 'Acessórios', img: 'https://utfs.io/f/626eabe3-89da-4c1f-8fef-8e24377a6794-2us.jfif' },
]

export default function Categorias() {
  return (
    <section className="w-full py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Categorias. <span className="font-normal text-gray-700">Encontre o que você procura.</span>
      </h3>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition cursor-pointer">
          <h4 className="font-semibold">iPhone</h4>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition cursor-pointer">
          <h4 className="font-semibold">iPad</h4>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition cursor-pointer">
          <h4 className="font-semibold">Mac</h4>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition cursor-pointer">
          <h4 className="font-semibold">Apple Watch</h4>
        </div>
      </div>
    </section>
  )
} 