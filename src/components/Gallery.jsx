import React, { useEffect, useState } from "react";

function Gallery() {
  const [dogImages, setDogImages] = useState([]);

  // Fetch 6 random images
  const fetchDogImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((response) => response.json())
      .then((data) => setDogImages(data.message));
  };

  // Fetch images on
  useEffect(() => {
    fetchDogImages();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center bg-color-3 p-6">
      <div className="text-center mb-10">
        <p className="text-4xl text-color-1">
          Meet a few of our pawsome friends!
        </p>
      </div>

      {/* Grid 2 rows x 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {dogImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              src={image}
              alt={`Dog ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <button
        className="px-2 py-3 bg-color-4 md:py-3 md:px-6 lg:py-3 lg:px-6 md:rounded-full lg:rounded-full text-white rounded-full shadow-md hover:bg-color-2 transition duration-300 fixed bottom-10 right-10 sm:relative sm:bottom-auto sm:right-auto"
        onClick={fetchDogImages}
      >
        New
      </button>
    </div>
  );
}

export default Gallery;
