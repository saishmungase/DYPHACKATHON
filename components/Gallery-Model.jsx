import { X } from "lucide-react";
import React from "react";

const GalleryModal = ({ section, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
    >
      <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] flex flex-col shadow-xl overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 id="gallery-title" className="text-2xl font-bold text-gray-800">
            Product Details
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <GalleryData product={section} />
      </div>
    </div>
  );
};

const GalleryData = ({ product }) => {
  return (
    <div className="flex flex-1 w-full h-full bg-white p-6">
      <div className="w-1/3 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full max-h-60 object-contain rounded-lg"
        />
      </div>

      <div className="w-2/3 flex flex-col justify-between px-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{product.description}</p>

          <div className="mt-4 space-y-1">
            <p className="text-gray-700">
              <strong>Protection:</strong>{" "}
              <span className="text-green-600">{product.protection_level}</span>
            </p>
            <p className="text-gray-700">
              <strong>Filtration:</strong> {product.filtration_efficiency}
            </p>
            <p className="text-gray-700">
              <strong>Recommended AQI:</strong> {product.maxAQI}
            </p>
            <span
              className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                product.reusable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {product.reusable ? "Reusable" : "Non-reusable"}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-gray-900">{product.price}</p>
          <button className="bg-green-400 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-md transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;

