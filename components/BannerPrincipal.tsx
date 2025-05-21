export default function BannerPrincipal() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Apple Marketplace</h1>
          <p className="text-xl">Encontre os melhores produtos Apple</p>
        </div>
      </div>
    </div>
  )
} 