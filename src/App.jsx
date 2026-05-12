import { useState } from "react";

import "./App.css";

import combo from "./assets/combo.avif";

import casal from "./assets/casal.webp";

export default function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === "casal" ? "familia" : "casal");
  };

  const dadosCombo = {
    casal: {
      imagem: casal,

      titulo: "Combo para duas pessoas",

      preco: "R$ 65,00",

      descricao:
        "Dois hamburgueres, duas porções de batata e dois refrigerantes.",
    },

    familia: {
      imagem: combo,

      titulo: "Combo para quatro pessoas",

      preco: "R$ 120,00",

      descricao:
        "Quatro hamburgueres, quatro porções de batata e quatro refrigerantes.",
    },
  };

  return (
    <>
      <div className="container">
        <h1>Escolha o seu combo</h1>

        <button>Mudar Combo</button>
      </div>
    </>
  );
}
