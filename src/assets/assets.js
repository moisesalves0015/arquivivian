import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './capa-episodio.jpg'
import podcastex from './podcast-ex.png'
import episodioex from './episodio-ex.png'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './capa-podcast.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id: 0,
        name: "Arquivo Global",
        image: img8,
        fulldesc: "O História Global é um podcast feito para quem quer entender melhor o passado e como ele ainda influencia o mundo de hoje. Aqui, você vai ouvir histórias sobre acontecimentos importantes da história moderna e contemporânea, como a formação dos impérios, as grandes guerras, as revoluções e muitos outros temas que ajudaram a construir o mundo em que vivemos. Cada episódio é apresentado de forma clara, leve e com explicações simples, para que qualquer pessoa possa acompanhar, mesmo que não tenha estudado muito sobre o assunto antes.",
        desc: "Um podcast que explica os acontecimentos do mundo.",
        bgColor: "#2a4365",
        produzido:"Moises Santos, Rayris Teles"


    },
    {
        id: 1,
        name: "NOME DO PODCAST",
        image: podcastex,
        desc: "Aqui podemos colocar uma pequena frase.",
        bgColor: "#22543d",
        produzido:"MEMBROS DO GRUPO"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Alianças e a Primeira Guerra Mundial",
        image: img1,
        file: song1,
        desc: "Neste episódio, analisamos como o sistema de alianças contribuiu para transformar um conflito regional em uma guerra de escala global. Entenda como a Tríplice Aliança e a Tríplice Entente criaram um ambiente de tensão entre as potências europeias, e como esse cenário acabou culminando no início da Primeira Guerra Mundial.",
        duration: "3:00",
        album: 0,
        podcast: "Arquivo Global",
        tema: "Primeira Guerra Mundial",

    },
    {
        id: 1,
        name: "EXEMPLO DE EPISODIO",
        image: episodioex,
        file: song1,
        desc: "AQUI FICA A DESCRIÇÃO DO EPISODIO.",
        duration: "0:00",
        album: 1,
        podcast: "Arquivo Global",
        tema: "TEMA DO EPISODIO",
    },

]