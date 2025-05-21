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

export function Categorias() {
  return (
    <section className="w-full flex justify-center py-8 bg-white">
      <div className="flex gap-10 overflow-x-auto">
        {categorias.map((cat) => (
          <div key={cat.nome} className="flex flex-col items-center min-w-[80px]">
            <Image 
              src={cat.img} 
              alt={cat.nome} 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="text-xs mt-2">{cat.nome}</span>
          </div>
        ))}
      </div>
    </section>
  )
} 