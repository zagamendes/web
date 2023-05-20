import React from 'react';
import logo from '../img/logo.svg';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="space-y-2 md:space-y-5">
      <Image src={logo} alt="logo" />
      <h1 className="text-3xl sm:text-2xl font-bold text-green-50">
        Sua cápsula do tempo
      </h1>
      <p>
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
        com o mundo!
      </p>
      <a className="inline-block mb-5 cursor-pointer uppercase bg-green-500 hover:bg-green-400 text-black px-5 py-3 rounded-full">
        Cadastrar Lembrança
      </a>
    </div>
  );
};

export default Hero;
