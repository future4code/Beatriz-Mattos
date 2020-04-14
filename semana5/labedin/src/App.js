import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/PefVBmY.jpg" 
          nome="Beatriz de Mattos" 
          descricao="Futura desenvolvedora Full Stack e eterna estudante. Entusiasta da música e todo tipo de arte. Curiosa e apaixonada por tecnologia, doom metal, egito antigo e insetos."
        />
        
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowheaddown_110942.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container" id="contact">
        <CardPequeno
          imagem="https://www.traum.com.br/wp-content/uploads/2018/06/email-icon-121-400x400.png"
          nome="E-mail:"
          descricao="bia@gmail.com"

        />

        <CardPequeno
          imagem="data:image/png;base64,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"
          nome="Endereço: "
          descricao="Rua Jugurtha Lourival Glória, nº165"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/92939006_551098708868600_4719373140734509056_n.png?_nc_cat=105&_nc_sid=85a577&_nc_ohc=ksUrXZChs7wAX_XvvJh&_nc_ht=scontent.fcgh9-1.fna&oh=9e27cbd58f76733098df872619305e0d&oe=5EBAB379" 
          nome="Labenu" 
          descricao="Labenu é uma startup que forma Desenvolvedores Web Full Stack. É com muito orgulho que atualmente faço parte da Missão Julian!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/p960x960/77355401_108458213955677_8887574047496339456_o.png?_nc_cat=105&_nc_sid=85a577&_nc_ohc=4yqRXaD0Ne8AX_AyOym&_nc_ht=scontent.fcgh9-1.fna&oh=240989afc823e8f142fd3831f5f2c00a&oe=5EBAF846" 
          nome="Revho Comunicação" 
          descricao="Criei conteúdos e estratégias para as redes sociais de clientes diversos. Foi uma grande experiência, onde desenvolvi múltiplas skills de paciência, trabalho e cooperação em equipe." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="https://www.facebook.com/countessdrugula" target="_blank">
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/23/23660.png" 
            texto="Facebook" 
          />        
        </a>

        <a href="https://github.com/Beatriz-Mattos" target="_blank">
          <ImagemButton 
            imagem="https://lh3.googleusercontent.com/proxy/_TChGvPkRA1jM3ZwMxvhRrzFA19Z2TlE_YCPaQJ8tN_ShwDS66wXbwhzq6VDR47fg63rS-wSPPMJ0Dpr7J8Ax9dkXtLnjR4FLCQjmw2t3nYSwJ-XgENQYWaEXNXj"
            texto="Github"
          />
        </a>

        <a href="https://www.linkedin.com/in/beatriz-mattos/" target="_blank">
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/49/49408.png"
            texto="LinkedIn"
          />
        </a>

      </div>
    </div>
  );
}

export default App;
