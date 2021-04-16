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
            name: "Tijana",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/tijana.png",
            artist: "Željko Bebek",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/ZELJKO-BEBEK-TIJANA.mp3",
            color: ["#a1693e", "#689d49"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Doći ću ti u snovima",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/rose.png",
            artist: "Jura Stublić",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Jura-Stublic-Doci-Cu-Ti-U-Snovima.mp3",
            color: ["#d81504", "#29370a"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Verujem, ne verujem",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/bajaga.png",
            artist: "Bajaga",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Bajaga-i-Instruktori-Verujem-ne-verujem-Audio-1988.mp3",
            color: ["#3f3e3b", "#7e746f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Jovano Jovanke",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/jovano.png",
            artist: "Vlatko Stefanovski",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Jovano-Jovanke-Izoslobodenja-Skopja.mp3",
            color: ["#e693a2", "#cbaa4e"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Pišonja i Žuga",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/pisonja.png",
            artist: "Zabranjeno pušenje",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Zabranjeno-pusenje-Balada-o-Pisonji-i-Zugi-Pozdrav-iz-zemlje-Safari.mp3",
            color: ["#4e6cbb", "#a41840"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Sve još miriše na nju",
            cover: "https://mybestmassagechair.com/wp-content/uploads/2021/04/sve-jos.png",
            artist: "Parni valjak",
            audio: "https://mybestmassagechair.com/wp-content/uploads/2021/04/Parni-Valjak-Sve-jos-mirise-na-nju.mp3",
            color: ["#191c0f", "#eed683"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;