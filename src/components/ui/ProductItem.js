import { AiOutlinePlus } from 'react-icons/ai';

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white flex flex-col items-center text-center text-sm gap-y-1 p-5">
      <picture className="relative block">
        <button className="w-8 h-8 flex absolute top-0 right-2 border shadow-md rounded-lg border-gray-200 text-purple-700 transition-colors bg-white hover:bg-purple-50 items-center justify-center">
          <AiOutlinePlus size={16} />
        </button>
        <img src={product.image} alt={product.title} className="w-full" />
      </picture>
      <div className=" font-semibold text-brand-color ">₺{product.price}</div>
      <div className=" font-bold text-gray-700">{product.title}</div>
      <div className="text-gary-500">{product.alt}</div>
    </div>
  );
};

export default ProductItem;
