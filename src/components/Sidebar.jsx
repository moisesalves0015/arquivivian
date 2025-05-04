import React, { useState } from 'react';
import { assets } from '../assets/assets';
import MyQRCode from './MyQRCode';

const Sidebar = () => {
    const [showQRCode, setShowQRCode] = useState(false);

    const toggleQRCode = () => {
        setShowQRCode(prev => !prev);
    };

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            {/* Menu Superior */}
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                  
                    <p className='font-bold text-4xl'>História Pública</p>
                </div>
                
            </div>

           
            <div className='bg-[#121212] h-[85%] rounded'>
             {/* Biblioteca 
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="library" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="arrow" />
                        <img className='w-5' src={assets.plus_icon} alt="plus" />
                    </div>
                </div>
                */}

                {/* Playlist */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Os podcasts desta página foram criados por alunos da disciplina de História Pública.
                    </h1>
                    <p className='font-light'>Uma maneira de levar debates históricos para além da universidade.</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                        Ementa da disciplina
                    </button>
                </div>

                {/* QR Code Section */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Mostre o QR Code para os alunos acessarem o site</h1>
                    <p className='font-light'>Compartilhe o QR Code em sala para os alunos acessarem o conteúdo no celular.</p>
                    <button
                        onClick={toggleQRCode}
                        className='mb-3 px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                        {showQRCode ? 'Fechar QR Code' : 'Abrir QR Code'}
                    </button>
                    {showQRCode && <MyQRCode />}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
