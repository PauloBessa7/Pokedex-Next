export default function CardPokemonSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-40">
      <div className="bg-gray-300 rounded-full h-24 w-24 mb-4"></div>
      <div className="bg-gray-300 h-6 w-20 mb-2 rounded"></div>
      <div className="bg-gray-300 h-4 w-16 rounded"></div>
    </div>
  );
}