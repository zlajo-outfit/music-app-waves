import { v4 as uuidv4} from "uuid";

function chillHop() {
    return [
        {
            name: "Ako tražiš nekoga",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/ako-trazis-cover.png",
            artist: "Prljavo kazalište",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Ako-Trazis-Nekoga.mp3",
            color: ["#6B78B7", "#fae07b"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Heroj ulice",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/prljavo-kazaliste-heroj-ulice-cover.jpg",
            artist: "Prljavo kazaliste",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/prljavo-kazaliste-heroj-ulice-song.mp3",
            color: ["#3a5aad", "#edf236"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Moj bijeli labude",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/prljavo-kazaliste-moj-bijeli-labude-cover.jpg",
            artist: "Prljavo kazaliste 2",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/prljavo-kazaliste-moj-bijeli-labude-song.mp3",
            color: ["#205950", "#2ab33bf"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;