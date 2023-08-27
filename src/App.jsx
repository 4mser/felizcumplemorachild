import { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    border-radius: 50%;
  } 20% {
    transform: scale(1)rotate(360deg) ;
  } 50%{
    transform: scale(2)rotate(720deg);
  } 70% {
    transform: scale(3)rotate(1080deg) ;
  } 100%{
    border-radius: 10px;
    transform: scale(1)rotate(1440deg);
  }
`;

function App() {
  const [showAdd, setShowAdd] = useState(false);

  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  const [showRegalo, setShowRegalo] = useState(false);

  const handleRegalo = () => {
    setShowRegalo(!showRegalo);
  };

  const [songPlayed, setSongPlayed] = useState(false);
  useEffect(() => {
    if (!songPlayed) {
      const audioElement = new Audio("/src/assets/japi.mp3");
      audioElement.play();
      setSongPlayed(true); // Marcar la canción como reproducida
    }
  }, [songPlayed]);

  return (
    <Container showAdd={showAdd}>
      <ApagarVela showAdd={showAdd}>
        <h1>APAGA LA VELA</h1>
      </ApagarVela>

      <ImagenContainer showAdd={showAdd} onClick={handleClick}>
        <img
          src="https://3.bp.blogspot.com/-k5j8VAp57zQ/U54IVi_tEQI/AAAAAAAALPk/k0-WdRw7AhY/s1600/vela.gif"
          alt=""
        />
      </ImagenContainer>

      {showAdd && (
        <>
          <AudioContainer>
            <audio controls autoPlay>
              <source src="/src/assets/japi.mp3" type="audio/mpeg" />
            </audio>
          </AudioContainer>
          <Image2>
            <img
              src="https://i.pinimg.com/originals/a2/f4/0b/a2f40b41af4986db5972ab3994a534bc.png"
              alt=""
            />
          </Image2>
          <Imagen3>
            <img
              src="https://th.bing.com/th/id/R.e48287205ec660f301b080e97e86690d?rik=8x1JTvAVMURqiw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fblackberry%2fblackberry_PNG45.png&ehk=NXR864lASfDX8%2fhBK3ABskTfM5MrHCsX9e%2fOqYWqoh8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/R.e48287205ec660f301b080e97e86690d?rik=8x1JTvAVMURqiw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fblackberry%2fblackberry_PNG45.png&ehk=NXR864lASfDX8%2fhBK3ABskTfM5MrHCsX9e%2fOqYWqoh8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/R.e48287205ec660f301b080e97e86690d?rik=8x1JTvAVMURqiw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fblackberry%2fblackberry_PNG45.png&ehk=NXR864lASfDX8%2fhBK3ABskTfM5MrHCsX9e%2fOqYWqoh8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </Imagen3>
          <Piolin>
            <img
              src="https://th.bing.com/th/id/R.91dc9481375e9700b4803023245d344c?rik=d%2fxKtE%2fBrYn7xw&pid=ImgRaw&r=0"
              alt=""
            />
          </Piolin>

          <Regalo onClick={handleRegalo} showRegalo={showRegalo}>
            <img
              src={
                showRegalo === false
                  ? "https://www.freepnglogos.com/uploads/regalos-png/regalos-white-box-tag-red-ribbon-gift-png-23.png"
                  : "https://th.bing.com/th/id/R.1d43fe1f24e46ad4d49162fde2cf61b2?rik=%2foOiprKQpcq34w&pid=ImgRaw&r=0"
              }
              alt=""
            />
          </Regalo>
        </>
      )}
      {showRegalo && showAdd && (
        <>
          <Image>
            <img src="https://app-valdi.s3.amazonaws.com/mora.jpg" alt="" />
          </Image>
          <Imagen4>
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Scientist-Albert-Einstein-PNG-Pic.png"
              alt=""
            />
          </Imagen4>
          <p>
            Felis cunple niña mora, que cumplas muxos mas bendiciones, siempre
            en mi krson
          </p>
        </>
      )}
    </Container>
  );
}

const AudioContainer = styled.div`
  display: none; /* Esto oculta el reproductor de audio en la interfaz */
`;

export default App;

const ApagarVela = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  opacity: ${(props) => (props.showAdd === true ? 0 : 1)};
`;

const Regalo = styled.div`
  z-index: 1;
  width: 15rem;
  overflow: hidden;
  position: fixed;
  animation: ${(props) => (props.showRegalo === true ? "" : "regalo")} 1s linear
    infinite;

  @keyframes regalo {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Image = styled.div`
  width: 10rem;
  animation-name: ${rotateAnimation};
  animation-duration: 2s;
  animation-timing-function: linear;
  overflow: hidden;
  animation-fill-mode: infinite;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 10rem;
  z-index: 2;
  bottom: 15rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image2 = styled.div`
  width: 70%;
  animation: japi;
  animation-duration: 2s;
  animation-timing-function: linear;
  overflow: hidden;
  animation-fill-mode: forwards;
  top: 0;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @keyframes japi {
    from {
      opacity: 0;
      top: 0;
    }
    to {
      opacity: 1;
      top: 10px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Imagen3 = styled.div`
  width: 100%;
  left: 0;
  height: 10rem;
  animation: japi2;
  animation-duration: 2s;
  animation-timing-function: linear;
  overflow: hidden;
  animation-fill-mode: forwards;
  bottom: 0;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  z-index: 4;

  @keyframes japi2 {
    from {
      opacity: 0;
      bottom: 0;
    }
    to {
      opacity: 1;
      bottom: 5px;
    }
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Imagen4 = styled.div`
  width: 100%;
  height: 12rem;
  position: fixed;
  bottom: 6rem;
  display: flex;
  justify-content: end;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    transform: translateX(5rem);
    object-fit: contain;
  }
`;

const Piolin = styled.div`
  width: 10rem;
  height: 10rem;
  position: fixed;
  top: 1rem;
  z-index: 10;
  animation: piolin 6s linear infinite;

  @keyframes piolin {
    0%,
    100% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  transition: 0.5s;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: ${(props) =>
    props.showAdd === true
      ? "linear-gradient(45deg,  #1b9d63, #38a3ca, #38054a)"
      : "#020202"};
  animation: gradient 8s ease infinite;
  background-size: 300% 300%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 10%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1 {
    color: white;
    position: absolute;
    top: 5rem;
  }

  p {
    width: 100%;
    z-index: 10;
    color: white;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    filter: drop-shadow(0 0 1px black);
  }
`;

const ImagenContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  left: 50%;
  transform: translateX(-50%);
  filter: ${(props) => (props.showAdd === true ? "invert(1)" : "")};

  ${(props) =>
    props.showAdd === true &&
    `
     animation-name: chaoVela;
     animation-duration: 0.3s;
     animation-timing-function: ease;
     animation-fill-mode: forwards;`}

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 0.9;
  }

  @keyframes chaoVela {
    from {
      transform: none;
      opacity: 0.9;
      transform: translateX(-50%);
    }
    to {
      transform: translate(-50%, 20rem);
      opacity: 0;
    }
  }
`;
