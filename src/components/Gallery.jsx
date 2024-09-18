import React, { useEffect, useState } from "react";

function Gallery() {
  const [dogImages, setDogImages] = useState([]);

  // Fetch 6 random images
  const fetchDogImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((response) => response.json())
      .then((data) => setDogImages(data.message));
  };

  useEffect(() => {
    fetchDogImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-color-1 p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 text-center">
        <p className="text-4xl font-bold text-gray-800 text-left p-10">
          #PAWSOME
        </p>
        <p className="text-xl text-gray-600 max-w-2xl text-left p-10">
          Meet some of our pawsome friends, a delightful group of furry
          companions that are sure to bring a smile to your face. Each one of
          them has their own unique personality, from playful pups who love to
          chase after toys, to loyal dogs that offer unwavering companionship..
        </p>
      </div>

      {/* Grid 2 rows x 3 columns of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full max-w-7xl">
        {dogImages.map((image, index) => (
          <div key={index} className="group">
            <img
              src={image}
              alt={`Dog ${index}`}
              className="w-full h-72 object-cover rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Refresh Button to load different images */}
      <button
        className="px-4 py-2 bg-color-4 text-white rounded-full hover:bg-color-3 shadow-md transition duration-300"
        onClick={fetchDogImages}
      >
        Load New Images
      </button>
    </div>
  );
}

export default Gallery;
