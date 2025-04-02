'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Para navegar entre páginas
import Image from "next/image";
import Head from "next/head"; // Importa o Head para definir o título da página

export default function Home() {
  const router = useRouter();
  
  // Estado para controlar a posição do botão que se move e a cor de fundo
  const [position, setPosition] = useState<{ top: string; left: string }>({
    top: '16px',
    left: '900px',
  });

  const [bgColor, setBgColor] = useState<string>('bg-gray-100');

  // Altera o título da aba ao carregar a página
  useEffect(() => {
    document.title = "Twink";
  }, []);

  // Função para mover o botão e mudar a cor de fundo
  const moveButton = () => {
    const newTop = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';

    // Geração de cor aleatória de fundo
    const colors = ['bg-red-300', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-pink-600', 'bg-purple-800'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setPosition({ top: newTop, left: newLeft });
    setBgColor(randomColor);
  };

  // Função para redirecionar para outra página
  const goToOtherPage = () => {
    router.push('/otherpage'); // Redireciona para a página "/otherPage"
  };

  return (
    <>
      {/* Define o título da página no navegador */}
      <Head>
        <title>Twink</title>
      </Head>

      <div className={`relative h-screen w-screen ${bgColor} flex items-center justify-center transition-all`}>
        {/* Container para os botões no topo centralizado */}
        <div className="absolute top-0 transform -translate-x-1/2 flex space-x-4 p-4">
          {/* Botão para ir para outra página */}
          <button
            onClick={goToOtherPage}
            className="p-4 text-lg font-bold text-white bg-green-500 rounded-lg hover:bg-green-400 transition-all"
          >
            SIM
          </button>
        </div>

        {/* Botão que muda de posição e cor de fundo */}
        <button
          onClick={moveButton}
          className="absolute p-4 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-400 transition-all"
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          NÃO
        </button>

        <div className='flex-col center'>
          <h1 className='text-black font-extrabold text-3xl text-center w-full'>
            VOCÊ É UM TWINKZNHO?
          </h1>
          <Image 
            src="/supreme.png" 
            alt="Descrição da imagem" 
            width={600} 
            height={200} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
