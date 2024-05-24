import React from "react";
import HeroImg from '../../../dist/assets/images/HeroImg.png'

const Home = () => {
  return <div>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${HeroImg}')` }}>
      <div className="absolute left-[40%]  top-32 w-1/2  h-1/2 inset-0 bg-[#FFF3E3] flex flex-col justify-start items-start p-10  text-black">
        <p className="mb-2">New Arrival</p>
        <h1 className="text-5xl font-bold mb-4 text-[#B98E2F]">Discover Our New Collection</h1>
        <p className="text-xl mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ut voluptatibus eos repudiandae vitae, voluptates, praesentium debitis, facilis iusto neque ipsa qui! Sapiente iure accusantium tenetur ea nisi, minima nulla?</p>
        <button className="bg-[#B98E2F] hover:bg-[#a37b29] text-white font-bold py-3 px-6 ">
          Buy Now
        </button>
      </div>
    </div>
  </div>;
};

export default Home;
