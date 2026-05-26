import { useState } from "react";

import "./App.css";

import combo from "./assets/combo.avif";

import casal from "./assets/casal.webp";

import CardProduto from './components/CardProduto'

export default function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');

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
    }
  }

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === "casal" ? "familia" : "casal");
  }

  const dados = dadosCombo[tipoCombo]

  return (
    <>
      <div className="container">
        <h1>Escolha o seu combo</h1>

        <button onclick={alterarCombo}>Mudar Combo</button>

        <CardProduto>
          imagem={dados.imagem}

          titulo={dados.titulo}

          preco={dados.preco}

          descricao={dados.descricao}
        </CardProduto>
      </div>
    </>
  );
}
