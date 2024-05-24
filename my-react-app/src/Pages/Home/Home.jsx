import React from "react";
import HeroImg from '../../../dist/assets/images/HeroImg.png'

const Home = () => {
  return <div>
        <div className="relative lg:h-screen h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${HeroImg}')` }}>
      <div className="absolute bg-opacity-50 lg:bg-opacity-100 lg:left-[40%] h-56 lg:h-auto top-32 lg:w-1/2 w-full bottom-0 lg:bottom-32 inset-0 bg-[#FFF3E3] flex flex-col justify-start items-start p-10  text-black">
        <p className="mb-2">New Arrival</p>
        <h1 className="lg:text-5xl text-3xl font-bold mb-4 text-[#B98E2F]">Discover Our New Collection</h1>
        <p className="text-xl mb-10 hidden lg:flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ut voluptatibus eos repudiandae vitae, voluptates, praesentium debitis, facilis iusto neque ipsa qui! Sapiente iure accusantium tenetur ea nisi, minima nulla?</p>
        <button className="bg-[#B98E2F] hover:bg-[#a37b29] text-white font-bold py-3 px-6 ">
          Buy Now
        </button>
      </div>
    </div>
  </div>;
};

export default Home;
