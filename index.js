const { log } = require('console')
const fs = require('fs')
const artists = [
    {
        name: "Ahmad Yani",
        songs: ["Aku Milikmu.mp3","DuoSedjoli.mp3","Kangen.mp3","Satu.mp3","Separuh Nafas.mp3"]
    },
    {
        name: "Ebiet G. Ada",
        songs: ["Berita Kepada Kawan.mp3", "Masih Ada Waktu.mp3","Menjaring Matahari.mp3","Titip Rindu Buat Ayah.mp3","Untuk Kita Renungkan.mp3"]
    },
    {
        name: "Iwan Setiawan",
        songs: ["Bento.mp3","Bongkar.mp3","Ibu.mp3","Kemesraan.mp3", "Serdadu.mp3"]
    },
    {
        name: "Peter Griffin",
        songs: ["Ada Apa Denganmu.mp3", "Menghapus Jejakmu.mp3","Mungkin Nanti.mp3","Semua Tentang Kita.mp3","Separuh Agus.mp3"]
    },
    {
        name: "Rose",
        songs: ["Cinta Dalam Hidupku.mp3","Hati Yang Kau Sakiti.mp3","Hey Ladies.mp3","Hijrah Cinta.mp3","Terlalu Cinta.mp3"]
    }
]
fs.mkdir("Music", ()=>{})
artists.forEach(
    artist => {
        fs.mkdir(`./Music/${artist.name}`, ()=>{})
        artist.songs.forEach(
            song => fs.writeFile(`./Music/${artist.name}/${song}`, "", ()=>{})
        )
    }
)