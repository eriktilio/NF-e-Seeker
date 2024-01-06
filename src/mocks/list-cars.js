import acucar from "../assets/acucar.png";
import arroz from "../assets/arroz.png";
import corona from "../assets/corona.png";
import feijao from "../assets/feijao.png";

const CardList = [
    {
        title: "Açúcar",
        content: "Atacadão CIDADE NOVA, Av. Max Teixeira, 3851",
        price: "5,49",
        imagem: acucar,
        last_update: new Date()
    },
    {
        title: "Arroz",
        content: "Nova Era Flores, Av. Torquato Tapajós, 2871",
        price: "6,45",
        imagem: arroz,
        last_update: new Date()
    },
    {
        title: "Feijão",
        content: "HIPER DB - MAX TEIXEIRA, Av. Max Teixeira, 3676",
        price: "6,39",
        imagem: feijao,
        last_update: new Date()
    },
    {
        title: "Coronita ~ UN",
        content: "Assaí Atacadista, Av. Autaz Mirim, 8755",
        price: "4,35",
        imagem: corona,
        last_update: new Date()
    }
];

export default CardList;