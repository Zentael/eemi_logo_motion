import Head from 'next/head'

export default function Home() {
  
  function on_ball_click(){
    console.log("ball clicked !")
    const ball = document.getElementById("eemi_ball");
    ball.addEventListener("animationiteration", on_gif_appear); 
  }
  
  function on_gif_appear(){
    const ball = document.getElementById("eemi_ball");
    const gif = document.getElementById("eemi_gif");
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    ball.style.animation = "none";
    title.style.opacity = "0"
    setTimeout(function(){
      ball.style.display = "none";
      title.style.display = "none"
      document.getElementById("eemi_ball_container").style.display = "none";
      gif.style.display = "block";
      const gif_img = document.createElement('img');
      gif_img.setAttribute("src", "/eemi_logo.gif");
      gif.appendChild(gif_img);
      setTimeout(function(){
        gif_img.setAttribute("src", "/eemi_logo.png");
        gif_img.style.height = "540px";
        gif_img.style.width = "960px";
        gif_img.style.margin = "0 auto";
        gif_img.style.display = "block";
        content.style.display = "block";
        setTimeout(function(){
          gif_img.animate([
            // keyframes
            {
              height: "540px",
              width: "960px",
            },
            {
              height: "145px",
              width: "240px",
            }
          ], {
            // timing options
            duration: 1000,
            iterations: 1,
            fill: "forwards",
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          });
          setTimeout(function(){
            content.style.opacity = "1";
            content.style.marginTop = "0";  
          }, 1000)
        }, 1000)  
      }, 3200);
    }, 1000);
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main onClick = {on_ball_click}>
        <div id="eemi_ball_container"><div id="eemi_ball"></div></div>
        
          <div id="eemi_gif"></div>
         
        
        <h1 id="title">
          Pour découvrir la première école digitale, commencez ici
        </h1>
        <article id="content">
          
<h3>Qu'est-ce que le Lorem Ipsum?</h3>

<div id="tooltip"><a href="/" target="_blank">Détails de la filière CTO</a>
    <div id="top">
        <h3>Devenez pro du développement</h3>
        <p>Cliquez</p>
        <i></i>
    </div>
</div>

<br></br>

<div id="tooltip"> <a href="/" target="_blank">Détails de la filière CDO</a>
    <div id="top">
        <h3>Devenez pro du design</h3>
        <p>Cliquez</p>
        <i></i>
    </div>
</div>

<br></br>

<div id="tooltip"><a href="/" target="_blank">Détails de la filière CEO</a>
    <div id="top">
        <h3>Devenez pro du marketing</h3>
        <p>Cliquez</p>
        <i></i>
    </div>
</div>

<br></br>

Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
Pourquoi l'utiliser?

On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

<h3>D'où vient-il?</h3>

Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.

L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).
<h3>Où puis-je m'en procurer?</h3>

Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.
        </article>
      </main>
      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        main {
          margion: 0 auto;
        }

        #title{
          transition: 1s;
        }

        #eemi_ball_container{
          margin-top:80px;
          height: 45px;
          
          position:relative;
        }

        #eemi_ball {
          height: 30px;
          width: 30px;
          background-color: #15163A;
          border-radius: 50%;
          margin: 0 auto;
          position: absolute;
          left: calc(50% - 15px);
          bottom:0;

          animation-duration: 0.5s;
          animation-name: bounce;
          animation-iteration-count: infinite;
          animation-direction: forwards;
          animation-timing-function: cubic-bezier(0.42,0,0.58,1);
        }

        @keyframes bounce {
          0% {
            bottom: 0;
          }
        
          50% {
            bottom: 15px;
          }

          100% {
            bottom: 0;
          }
        }

        #eemi_gif{
          margin-top:0;
          display:none;
        }

        #eemi_gif > img{
          height: 540px;
        }

        @keyframes reduceToCorner {
          from {
            height: 540px;
            width: 960px;
          }

          to {
            height: 270px;
            width: 480px;
          }
        }

        #content{
          display:none;
          margin-top: 20px;
          transition: 1s;
          opacity: 0; 
        }

      #tooltip {
          display:inline-block;
          position:relative;
          border-bottom:1px dotted #666;
          text-align:left;
      }
      
      #tooltip #top {
          min-width:200px; 
          top:-20px;
          left:50%;
          transform:translate(-50%, -100%);
          padding:10px 20px;
          color:#444444;
          background-color:#EEEEEE;
          font-weight:normal;
          font-size:13px;
          border-radius:8px;
          position:absolute;
          z-index:99999999;
          box-sizing:border-box;
          border:1px solid #000000;box-shadow:0 1px 8px rgba(0,0,0,0.5);
          display:none;
      }
      
      #tooltip:hover #top {
          display:block;
      }
      
      #tooltip #top i {
          position:absolute;
          top:100%;
          left:50%;
          margin-left:-12px;
          width:24px;
          height:12px;
          overflow:hidden;
      }
      
      #tooltip #top i::after {
          content:'';
          position:absolute;
          width:12px;
          height:12px;
          left:50%;
          transform:translate(-50%,-50%) rotate(45deg);
          background-color:#EEEEEE;
          border:1px solid #000000;box-shadow:0 1px 8px rgba(0,0,0,0.5);
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            
              background-color: #000;
              color: #fff;
              overflow: hidden;
            
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
