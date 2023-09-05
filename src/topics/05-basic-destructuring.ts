interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    autor: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mesa que masa plauda",
    details: {
        autor: "Chan",
        year: 2014
    }
}


const [,,,trunks ='no existe'] = ['Goku','Vegetta','Trunks'];
console.log(trunks);






const {song,audioVolume:volumen}= audioPlayer;
const {autor} = audioPlayer.details
console.log('cancion: ',song);
console.log('Volumen: ',volumen);
console.log('autor',autor);






export{};