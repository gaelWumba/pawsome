import React from "react";

function Search() {
  return (
    <div className="mt-24 bg-color-2 h-[32rem] p-10">
      <section className=" mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        {/* Left Side - Dog Image */}
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:mr-6">
          <img src={woof} width={800} alt="Woof" />
          {randomDogImage && (
            <img
              src={randomDogImage}
              alt="Random Dog"
              width={400}
              height={100}
              className="absolute w-1/4 h-auto top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg"
            />
          )}
        </div>

        {/* Right Side - Content */}
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Paleo Ridge - Your Dog's Happy Place
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Award-winning raw dog food designed for dogs, inspired by nature.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Shop Now
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
